import ClockTemplate from "./template.hbs";
import { Model, ModelComponent } from "fronty.js";
export class ClockModel extends Model {
    constructor() {
        super("clock");
    }
    /**
     * @param {Date} t
     */
    set t(t) {
        this.set(() => {
            //Format the time
            this.time = t.toLocaleTimeString();
        });
    }
    /**
     * @param {Date} time
     */
}
export class ClockComponent extends ModelComponent {
    constructor(clockModel = new ClockModel(), destId) {
        super(ClockTemplate, clockModel, destId);
        this.clockModel = clockModel;
        const int = setInterval(() => {
            this.clockModel.t = new Date();
        }, 100);
    }
}
