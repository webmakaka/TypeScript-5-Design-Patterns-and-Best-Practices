import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { build } from "vite"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import { nodePolyfills } from "vite-plugin-node-polyfills"
const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory

const srcDir = path.resolve(__dirname, "src")

async function buildLibraries() {
  const entries = await fs.promises.readdir(srcDir)
  const libraries = entries
    .filter((file) => file.endsWith(".ts"))
    .map((file) => ({
      entry: path.resolve(srcDir, file),
      name: file.replace(/\.ts$/, ""),
      fileName: file.replace(/\.ts$/, ""),
    }))

  libraries.forEach(async (libItem) => {
    try {
      await build({
        configFile: false,
        build: {
          lib: libItem,
          minify: false,
          emptyOutDir: false,
          plugins: [
            nodePolyfills({
              // To exclude specific polyfills, add them to this list.
              exclude: [
                "fs", // Excludes the polyfill for `fs` and `node:fs`.
              ],
              // Whether to polyfill specific globals.
              globals: {
                Buffer: true, // can also be 'build', 'dev', or false
                global: true,
                process: true,
              },
              // Whether to polyfill `node:` protocol imports.
              protocolImports: true,
            }),
          ],
          rollupOptions: {
            treeshake: false,
            output: {
              format: "es",
            },
            plugins: [commonjs(), typescript()],
          },
        },
      })
      console.log(`Built library: ${libItem.name}`) // Log successful build
    } catch (error) {
      console.error(`Error building library ${libItem.name}:`, error)
    }
  })
}

buildLibraries()
