# Contributing

Thank you for considering contributing to Pain Network Worldwide — your help makes this project better.

If you're new to open source, here's a simple workflow to get started.

1. Open an issue first for larger changes so we can discuss the approach.
2. Fork the repository and create a feature branch from `main`.
   - Use descriptive branch names, e.g. `feature/update-hero-text` or `fix/build-error`
3. Commit small, focused changes. Use clear commit messages.
   - Example: `fix(hero): correct heading text` or `feat(landing): add showcase section`
4. Push your branch and open a Pull Request to `main`.

Checklist for PRs

- [ ] The PR description explains the change and why it is needed.
- [ ] New code follows the project style (TypeScript, React, and CSS patterns used in the repo).
- [ ] Linting and type checks pass locally (if you have them configured).
- [ ] Visual changes include screenshots or a brief GIF showing the behavior.
- [ ] If the change affects public behavior, update the README or docs appropriately.

Local dev notes

- Run the dev server:

```powershell
npm install
npm run dev
```

- If you use `pnpm`:

```powershell
pnpm install
pnpm dev
```

Formatting & linting

- We recommend using the VS Code extensions: ESLint and Prettier.
- You can format with Prettier locally: `npx prettier --write .`

Thank you — we appreciate your contributions and will review PRs as quickly as possible.
