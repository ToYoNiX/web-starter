# web-starter

Template for toyonix static sites: Next.js (static export) on GitHub Pages, built on
[`@toyonix/web-kit`](https://github.com/ToYoNiX/web-kit).

## Start a new site

1. **Use this template → Create a new repository.** The repo name becomes the URL
   (`toyonix.github.io/<name>/`), so pick a lowercase-kebab name you'll keep.
2. Clone it, then:
   ```sh
   npm ci
   npm run setup   # enables Pages, adds the toyonix-site topic, names the site
   ```
3. Edit the `"toyonix"` field in `package.json` and the "This app" section of `AGENTS.md`.
4. Build the app, then push to `main`. It deploys automatically.

## Day to day

```sh
npm run dev     # local dev server
npm run check   # format, lint, typecheck, build (what CI runs)
```

Read [AGENTS.md](AGENTS.md) for the platform rules: how to use the kit, links, storage, and
what not to change.

## License

MIT, see [LICENSE](LICENSE). A site with written content can add a separate content license (e.g. `LICENSE-content`) and say in its README which applies to what.
