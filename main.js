import "./base.css";
import { Counter, CounterComponent } from "./src/components/counter/index.js";
import { SourceComponent, SourceModel } from "./src/components/source/index.js";
const counterModel = new Counter();
const counterComponent = new CounterComponent(counterModel, "counter");
const sourceModel = new SourceModel();
const sourceComponent = new SourceComponent(sourceModel, "source");
counterComponent.start();
sourceComponent.start();
