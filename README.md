# Next.js app created using t3 stack

`npm create t3-app@latest`

## Steps to run locally.

- [] Create PG database locally, I created mine using docker heres a link on how to do this. [Create pg database with docker](https://www.code4it.dev/blog/run-postgresql-with-docker/).
- [] Create .env file and copy pg connection string to `DATABASE_URL`
- [] Run `npx prisma db push` to sync db with prisma schema. This creates the tables in your db.
- [] Run `npm run dev` to get next js started.

## Why next.js?

- Next.js is both a frontend & a backend. Its a fullstack framework. We can connect a database and `/api` routes like GET, POST, PUT no need for external backend.
- Next.js has Client and Server components. Server components render faster, no need for useEffect to fetch data. All interactivity is client side using `"use client"`.
- Next.js is great for SEO and has better performance with SSR (server side rendering) and SSG (Static Site Generation) for static pages.
- Next.js has built in middleware, routing and /api routes.
