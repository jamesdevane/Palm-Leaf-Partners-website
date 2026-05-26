"""
Local dev server that mirrors Vercel's `cleanUrls: true` rewrite behavior.

Vercel rewrites `/pages/globe` → `/pages/globe.html` automatically in
production, but plain `python -m http.server` doesn't, so local tests of
extension-less URLs 404. This thin SimpleHTTPRequestHandler subclass tries
the path as-given first, then falls back to `<path>.html` and
`<path>/index.html` before giving up.

Usage:
    python tools/dev-server.py            # serves on port 55550
    python tools/dev-server.py 8000       # serves on chosen port
"""

import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlsplit


class CleanUrlHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Strip query string before resolving the file — SimpleHTTPRequestHandler
        # already does this, but doing it ourselves lets the fallbacks below
        # check the right thing.
        url_path = urlsplit(path).path
        fs_path = super().translate_path(url_path)

        if os.path.isfile(fs_path) or os.path.isdir(fs_path):
            return super().translate_path(path)

        # cleanUrls fallback: try `<path>.html`
        html_candidate = fs_path + ".html"
        if os.path.isfile(html_candidate):
            return super().translate_path(url_path.rstrip("/") + ".html")

        # cleanUrls fallback: try `<path>/index.html`
        index_candidate = os.path.join(fs_path, "index.html")
        if os.path.isfile(index_candidate):
            return super().translate_path(url_path.rstrip("/") + "/index.html")

        # Nothing matched — let the parent return the original (which will 404)
        return super().translate_path(path)


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 55550
    # Serve from the repo root regardless of where the script is invoked from.
    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(repo_root)

    with ThreadingHTTPServer(("", port), CleanUrlHandler) as httpd:
        print(f"Serving {repo_root} on http://localhost:{port}/  (cleanUrls enabled)")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopping.")


if __name__ == "__main__":
    main()
