import "./styles.css";
import Counter from "./components/counter";
import Observer from "./components/observer";

const observerA = new Observer("ObserverA");
const observerB = new Observer("ObserverB");
const observerC = new Observer("ObserverC");
const observerD = new Observer("ObserverD");

Counter.render();
observerA.render();
observerB.render();
observerC.render();
observerD.render();
