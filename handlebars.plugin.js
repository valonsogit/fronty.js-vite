import Handlebars from "handlebars";
const hbsRegex = /\.(hbs)$/;
export default function compileHandlebars() {
    return {
        name: "compile-handlebars",
        transform(src, id) {
            if (hbsRegex.test(id)) {
                const { code, map } = Handlebars.precompile(src, {
                    srcName: id,
                });
                const template = `import Handlebars from "handlebars";export default Handlebars.template(${code});`;
                return {
                    code: template,
                    map,
                };
            }
        },
    };
}
