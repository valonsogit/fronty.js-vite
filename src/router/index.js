import template from "./template.hbs";
import { Component, ModelComponent, RouterComponent } from "fronty.js";
import { CounterClockWisePage } from "./views/CounterClockWise";
import { SourcePage } from "@views/Source";

export class Router extends RouterComponent {
    constructor() {
        super("router", template, "route", undefined);
        super.setRouterConfig({
            counter: {
                component: new CounterClockWisePage(),
                title: "Clock",
            },
            source: {
                component: new SourcePage(),
                title: "Source",
            },
            defaultRoute: "counter",
        });
    }
    createChildModelComponent(className, element, id, modelItem) {
        if (className === "LanguageControl") {
            return new Component(() => "ES", id);
        }
    }
}
