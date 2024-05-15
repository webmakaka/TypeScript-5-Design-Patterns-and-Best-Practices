const port = 8080

const handler = async (req: Request) => {
  const body = "Hello, World!"
  return new Response(body, { status: 200 })
}

Deno.serve({ port }, handler)

console.log(`HTTP server listening on port ${port}`)
