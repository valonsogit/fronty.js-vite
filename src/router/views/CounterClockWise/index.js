import { Component } from "fronty.js";
import { CounterComponent } from "@components/counter/index.js";
import { ClockComponent } from "@components/clock/index";
import template from "./template.hbs";
import { WiseComponent } from "@components/wise";
import "./style.css";
export class CounterClockWisePage extends Component {
    constructor() {
        super(template, null);
        const counter = new CounterComponent(undefined, "counter");
        this.addChildComponent(counter);
        
        const wise = new WiseComponent(undefined, "wise");
        this.addChildComponent(wise);

        const clock = new ClockComponent(undefined, "clock");
        this.addChildComponent(clock);
    }
}
