# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### Deploying to GitHub Pages

This project expects to be hosted from the repository subpath `Girlfriend-Website`.
When building for production, assets will be referenced relative to `/Girlfriend-Website/`.
If you deploy to GitHub Pages, ensure the **Pages** configuration points to the `dist` folder or copy its contents into a branch named `gh-pages`.

### Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

### Publishing on GitHub Pages

After building, push the generated `dist` directory to a branch like `gh-pages`:

```bash
npm run build
git subtree push --prefix dist origin gh-pages
```