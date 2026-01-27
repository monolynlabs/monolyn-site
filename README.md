# monolyn-site

Static website for Monolyn Labs.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Recommended: Cloudflare Pages connected to GitHub.

Push to `main` and Cloudflare Pages will redeploy automatically.

## Structure

- `index.html` (home)
- `products/index.html`
- `support/index.html`
- `privacy/index.html`
- `terms/index.html`
- `css/style.css`
- `assets/` (icons + OG image)
- `_headers` (security headers)
- `_redirects` (canonical URL redirects)
