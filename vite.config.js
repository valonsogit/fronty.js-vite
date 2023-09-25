import { defineConfig } from "vite";
import compileHandlebars from "./handlebars.plugin";
import Inspect from "vite-plugin-inspect";
export default defineConfig({
    plugins: [Inspect(), compileHandlebars()],
});
