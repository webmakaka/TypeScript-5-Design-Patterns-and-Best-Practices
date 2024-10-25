import { initTRPC } from "@trpc/server"
import { createHTTPServer } from "@trpc/server/adapters/standalone"

const t = initTRPC.create()

const appRouter = t.router({
  hello: t.procedure
    .input((val: unknown) => {
      if (typeof val === "string") return val
      throw new Error("Invalid input: expected string")
    })
    .query((req) => {
      return `Hello, ${req.input}!`
    }),
})

const server = createHTTPServer({
  router: appRouter,
})

server.listen(3000)
export type AppRouter = typeof appRouter
