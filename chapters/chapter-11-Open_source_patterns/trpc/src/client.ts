// client.ts
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './server';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

async function main() {
  try {
    const response = await trpc.hello.query('tRPC User');
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();