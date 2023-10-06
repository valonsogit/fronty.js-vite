import { typewrite } from "@utils/text";
import templateVar from "./whatever.hbs";
import { Model, ModelComponent } from "fronty.js";

export class SourceModel extends Model {
    constructor() {
        super("source");
        this.message = "Go to source";
        this.href = "https://github.com/lipido/fronty.js";
    }
    /**
     * @param {string} v
     */
    setMessage(v) {
        this.set(() => {
            this.message = v;
        });
    }
}

export class SourceComponent extends ModelComponent {
    constructor(sourceModel = new SourceModel(), node) {
        super(templateVar, sourceModel, node);
        this.sourceModel = sourceModel;

        this.intervals = [];
        this.addEventListener("click", "a", e => {
            this.intervals.forEach(i => clearInterval(i));
            if (confirm("Are you sure you want to leave?")) {
                const iterator = typewrite("Bye bye!");
                const int = setInterval(() => {
                    this.sourceModel.setMessage(iterator.next().value);
                }, 100);
                this.intervals.push(int);
                setTimeout(() => {
                    window.location.href = this.sourceModel.href;
                }, 2000);
            } else {
                e.preventDefault();
                let bool = false;
                let i = 0;
                const run = () => {
                    return `${"ε=".repeat(i)} ${bool ? "┌" : "ﾉ"}(;*´Д\`)${
                        !bool ? "┌" : "ﾉ"
                    }`;
                };
                this.sourceModel.setMessage(`Oof, that was close!`);
                const int = setInterval(() => {
                    this.sourceModel.setMessage(
                        `Oof, that was close! ` + run()
                    );
                    bool = !bool;
                    i++;
                }, 300);
                this.intervals.push(int);
            }
        });
    }
}
