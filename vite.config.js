import { defineConfig } from "vite";
import compileHandlebars from "./handlebars.plugin";
import { fileURLToPath, URL } from "url";

export default defineConfig({
    resolve: {
        alias: {
            "@components": fileURLToPath(
                new URL("./src/components", import.meta.url)
            ),
            "@views": fileURLToPath(
                new URL("./src/router/views", import.meta.url)
            ),
            "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
        extensions: [".js", ".hbs"],
    },
    plugins: [compileHandlebars()],
});
