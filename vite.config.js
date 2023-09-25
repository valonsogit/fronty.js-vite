import { defineConfig } from "vite";
import compileHandlebars from "./handlebars.plugin";
export default defineConfig({
    plugins: [compileHandlebars()],
});
