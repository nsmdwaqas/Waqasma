import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function dynamicMetaPlugin(): Plugin {
  return {
    name: 'dynamic-meta-domain-plugin',
    transformIndexHtml(html, ctx) {
      const serverReq = (ctx as Record<string, any>)?.server?.req || (ctx as Record<string, any>)?.req;
      const host = serverReq?.headers?.['x-forwarded-host'] || serverReq?.headers?.host;
      if (!host) return html;
      const cleanHost = String(host).split(':')[0];
      const proto = serverReq?.headers?.['x-forwarded-proto'] || (cleanHost.includes('localhost') ? 'http' : 'https');
      const origin = `${proto}://${cleanHost}`;
      
      return html
        .replace(/https:\/\/ais-pre-fwru2o6zrcaaozjoec3zxz-933593385806\.asia-east1\.run\.app/g, origin)
        .replace(/https:\/\/ais-dev-fwru2o6zrcaaozjoec3zxz-933593385806\.asia-east1\.run\.app/g, origin);
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), dynamicMetaPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
