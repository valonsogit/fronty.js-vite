import CounterTemplate from "./template.hbs";
import { Model, ModelComponent } from "fronty.js";
export class Counter extends Model {
    constructor() {
        super("counter");
        this.count = 0;
        this.demonTime = false;
    }

    increase() {
        this.set(() => {
            this.count++;
            if (this.count >= 5) {
                this.demonTime = true;
            }
        });
    }
}

export class CounterComponent extends ModelComponent {
    constructor(counterModel, node) {
        super(CounterTemplate, counterModel, node);
        this.counterModel = counterModel;

        this.addEventListener("click", "#increase", () => {
            //update the model
            this.counterModel.increase();
        });
    }
}
