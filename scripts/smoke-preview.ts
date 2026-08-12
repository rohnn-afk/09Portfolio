import { preview } from 'vite';

const host = '127.0.0.1';
const port = 4173;
const previewServer = await preview({
  preview: {
    host,
    port,
    strictPort: true,
  },
});

try {
  for (const path of ['/', '/experience/ezyr']) {
    const response = await fetch(`http://${host}:${port}${path}`);
    const html = await response.text();

    if (!response.ok || !html.includes('id="root"')) {
      throw new Error(`Preview smoke test failed for ${path} (${response.status}).`);
    }

    console.log(`✓ ${path} returned the application shell (${response.status})`);
  }
} finally {
  await previewServer.close();
}
