# Next.js app created using t3 stack

`npm create t3-app@latest`

## Steps to run locally.

- [] Create PG database locally, I created mine using docker heres a link on how to do this. [Create pg database with docker](https://www.code4it.dev/blog/run-postgresql-with-docker/).
- [] Create .env file and copy pg connection string to `DATABASE_URL`
- [] Run `npx prisma db push` to sync db with prisma schema. This creates the tables in your db.
- [] Run `npm run dev` to get next js started.
