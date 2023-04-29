import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const PORT = process.env.PORT || 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    try {
      const url = req.originalUrl;
      const render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      let template = await fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, `${template}`);

      const html = template.split(`<!--app-html-->`);

      const [{ pipe }, initialState] = await render(url, {
        onShellReady() {
          res.write(html[0]);
          pipe(res);
        },
        onAllReady() {
          res.write(
            html[1] +
              `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(initialState).replace(
                /</g,
                '\\u003c'
              )}</script>`
          );
          res.end();
        },
      });
    } catch (e) {
      const err = e as Error;
      vite.ssrFixStacktrace(err);
      next(err);
    }
  });

  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
}

createServer();
