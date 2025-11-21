# Turborepo + Bun workspace

This repository now uses [Turborepo](https://turbo.build/repo) to manage multiple apps/packages and [Bun](https://bun.sh) as the package manager/runtime.

## Layout
- `apps/web` – Next.js marketing site with blog pages
- `apps/studio` – Sanity Studio for content management
- `packages/*` – reserved for any future shared libraries

## Getting started
```bash
bun install
bun run dev # runs turbo dev, which in turn starts apps/web
```

### Common scripts
- `bun run dev` – run all `dev` tasks (web + studio)
- `bun run dev:web` – run only the Next.js web app (http://localhost:3000)
- `bun run dev:studio` – run only Sanity Studio (http://localhost:3333)
- `bun run build` – build every package/app via Turbo
- `bun run lint` – run lint tasks
- `bun run clean` – clear Turbo caches

## Blog Setup

This project includes a blog powered by Sanity CMS. See [SANITY_SETUP.md](./SANITY_SETUP.md) for detailed setup instructions.

Quick start:
1. Create a Sanity project at https://www.sanity.io/manage
2. Copy `.env.example` files in `apps/web` and `apps/studio`
3. Add your Sanity project ID to the `.env.local` files
4. Run `bun run dev` to start both applications

## Notes
- Bun v1.3.2 is recorded in `packageManager`, so other contributors can stay on the same toolchain.
- The generated `bun.lock` should be committed so dependency versions remain deterministic.
