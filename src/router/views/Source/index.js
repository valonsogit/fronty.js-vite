import { Component } from "fronty.js";
import { SourceComponent } from "@components/source/index.js";
import template from "./template.hbs";
export class SourcePage extends Component {
    constructor() {
        super(template, null);
        const counter = new SourceComponent(undefined, "source");
        this.addChildComponent(counter);
    }
}
