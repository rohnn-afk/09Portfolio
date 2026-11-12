import { preview } from 'vite';

const host = '127.0.0.1';
const port = 0;
const previewServer = await preview({
  preview: {
    host,
    port,
    strictPort: true,
  },
});

try {
  const base = process.env.PAGES_BASE || '/';
  for (const route of ['', 'experience/ezyr/']) {
    const path = `${base}${route}`;
    const address = previewServer.httpServer.address();
    if (!address || typeof address === 'string') throw new Error('Preview server did not bind a port');
    const response = await fetch(`http://${host}:${address.port}${path}`);
    const html = await response.text();

    if (!response.ok || !html.includes('<main') || !html.includes(route ? 'The Neuron' : 'Thoughtful interfaces.')) {
      throw new Error(`Preview smoke test failed for ${path} (${response.status}).`);
    }

    console.log(`✓ ${path} returned the application shell (${response.status})`);
  }
} finally {
  await previewServer.close();
}
