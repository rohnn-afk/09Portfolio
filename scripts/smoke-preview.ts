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
  const foundersPath = 'projects/founders-lens/';
  const pages = [
    ['', ['I build products', `href="${base}${foundersPath}"`]],
    ['experience/ezyr/', ['The Neuron']],
    [foundersPath, [
      '<title>Founder’s Lens | Rohan Sharma</title>',
      '804 provider-reported tokens',
      'SOLID in practice',
      'FOR UPDATE SKIP LOCKED',
    ]],
  ] as const;
  for (const [route, markers] of pages) {
    const path = `${base}${route}`;
    const address = previewServer.httpServer.address();
    if (!address || typeof address === 'string') throw new Error('Preview server did not bind a port');
    const response = await fetch(`http://${host}:${address.port}${path}`);
    const html = await response.text();

    if (!response.ok || !html.includes('<main') || !markers.every((marker) => html.includes(marker))) {
      throw new Error(`Preview smoke test failed for ${path} (${response.status}).`);
    }

    console.log(`✓ ${path} returned the application shell (${response.status})`);
  }
} finally {
  await previewServer.close();
}
