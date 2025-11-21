# Turborepo + Bun workspace

This repository now uses [Turborepo](https://turbo.build/repo) to manage multiple apps/packages and [Bun](https://bun.sh) as the package manager/runtime.

## Layout
- `apps/web` – the original Next.js marketing site (your existing code now lives here)
- `packages/*` – reserved for any future shared libraries

## Getting started
```bash
bun install
bun run dev # runs turbo dev, which in turn starts apps/web
```

### Common scripts
- `bun run dev` – run all `dev` tasks (Next.js app exposed at http://localhost:3000)
- `bun run build` – build every package/app via Turbo
- `bun run lint` – run lint tasks
- `bun run clean` – clear Turbo caches

To target a single application you can use Turbo filters, e.g.:
```bash
bunx turbo dev --filter=@workspace/web
```

## Notes
- Bun v1.3.2 is recorded in `packageManager`, so other contributors can stay on the same toolchain.
- The generated `bun.lock` should be committed so dependency versions remain deterministic.
