//All files ending in .hbs are a function and should allow go-to definition

declare module "*.hbs" {
    export default (...any: any) => string;
}
