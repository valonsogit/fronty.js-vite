import WiseTemplate from "./template.hbs";
import { Model, ModelComponent } from "fronty.js";
import WiseItemTemplate from "./wiseItem.hbs";
import "./test.css"
export class WiseItemModel extends Model {
    constructor(emoji, id) {
        super("wiseItem");
        this.emoji = emoji;
        this.id = id;
        this.index = id + 1;
    }
}

export class WiseItemComponent extends ModelComponent {
    constructor(destId, itemModel) {
        super(WiseItemTemplate, itemModel, destId);
        this.itemModel = itemModel;
    }
}

export class WiseModel extends Model {
    constructor() {
        super("wise");

        const x = [
            "🤓",
            "🧠",
            "📚",
            "📖",
            "🧐",
            "🎓",
            "📝",
        ];
        this.wiseItems = [];
        for (let i = 0; i < x.length; i++) {
            this.wiseItems.push(new WiseItemModel(x[i], i));
        }
    }
    randomize() {
        //Randomize array in place
        let r = this.wiseItems;
        for (var i = r.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = r[i];
            r[i] = r[j];
            r[j] = temp;
        }

        //Manually update the id so we don't run into an infinite loop (NO CLUE)
        r = r.map((x, i) => {
            x.id = i;
            return x;
        });

        //trigger the update
        this.set(() => {});
    }
}
export class WiseComponent extends ModelComponent {
    constructor(wiseModel = new WiseModel(), destId) {
        super(WiseTemplate, wiseModel, destId);
        this.wiseModel = wiseModel;
        this.addEventListener("click", "#wise", () => {
            //update the model
            this.wiseModel.randomize();
        });
    }
    createChildModelComponent(className, element, id, modelItem) {
        if (className === "WiseItem") {
            return new WiseItemComponent(id, modelItem);
        }
    }
}
