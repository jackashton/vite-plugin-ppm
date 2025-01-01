# vite-plugin-ppm

A Vite plugin for handling `.ppm` files in your projects. This plugin leverages `ppm-parser` to parse `.ppm` files and seamlessly integrates them into your Vite-based projects.

## Installation

Install the plugin and the required peer dependency:

```bash
npm install vite-plugin-ppm ppm-parser --save-dev
```

Or if you use `pnpm`:

```bash
pnpm add vite-plugin-ppm ppm-parser --save-dev
```

> **Note:** `ppm-parser` is a required peer dependency and must be installed for `vite-plugin-ppm` to work.

---

## Usage

Add `vite-plugin-ppm` to your Vite configuration:

```javascript
// vite.config.js or vite.config.ts
import { defineConfig } from 'vite';
import vitePluginPPM from 'vite-plugin-ppm';

export default defineConfig({
  plugins: [vitePluginPPM()],
});
```

With this setup, you can import `.ppm` files directly in your JavaScript/TypeScript files:

```typescript
import myImage from './example.ppm';
console.log(myImage); // Parsed `.ppm` image data as an instance of PPMImage
```

---

## TypeScript Support

To enable TypeScript support for `.ppm` files, ensure your project recognizes the type declarations provided by `vite-plugin-ppm`. 

Add the following to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["vite-plugin-ppm/client"]
  }
}
```

If your vite project uses multiple `tsconfig` files, such as `tsconfig.app.json`, include the same in the relevant file.

---

## Contributing

Contributions are welcome! If you encounter issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

---

## License

MIT

