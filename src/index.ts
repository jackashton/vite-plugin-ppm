import fs from 'fs';
import { Plugin } from 'vite';

/**
 * Creates a Vite plugin to read and parse `.ppm` files.
 * @returns A Vite plugin instance.
 */
export default function vitePluginPPM(): Plugin {
  return {
    name: 'vite-plugin-ppm',
    transform(_, id) {
      if (id.endsWith('.ppm')) {
        const buffer = fs.readFileSync(id);

        // Generate JavaScript code to parse the .ppm file
        return `
          import parsePPM from 'ppm-parser';

          const data = new Uint8Array(${JSON.stringify(Array.from(buffer))});
          export default parsePPM(data);
        `;
      }
    },
  };
}
