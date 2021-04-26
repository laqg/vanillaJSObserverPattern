import Counter from "./counter";

function Observer(name) {
  this.name = name;
  this.observerSubscribe = `observerSubscribe${name}`;
  this.observerValue = `observerValue${name}`;
  this.setValue = function (value) {
    document.getElementById(this.observerValue).innerHTML = value;
  }.bind(this);
  this.subscribe = function () {
    Counter.counter.subscribe(this.setValue);
    const btn = document.getElementById(this.observerSubscribe);
    btn.addEventListener("click", () => {
      this.unsubscribe();
    });
    btn.innerHTML = "Unsubscribe";
    document.getElementById(this.observerValue).innerHTML =
      "<small><i class='suscribed'>you have subscribed!</i></small>";
  };
  this.unsubscribe = function () {
    Counter.counter.unsuscribe(this.setValue);
    const btn = document.getElementById(this.observerSubscribe);
    btn.innerHTML = "Subscribe";
    btn.addEventListener("click", () => {
      this.subscribe();
    });
    document.getElementById(this.observerValue).innerHTML =
      "<small><i class='unsuscribed'>you have unsubscribed!</i></small>";
  };
  this.render = function () {
    const container = document.getElementById(this.name);
    if (container) {
      container.innerHTML = `
      <button id='${this.observerSubscribe}'>Subscribe</button>
      <label>${this.name}:</label>
      <span id='${this.observerValue}'><small><i class='unsuscribed'>you have not yet subscribed</i></small></span>
      `;
      document
        .getElementById(this.observerSubscribe)
        .addEventListener("click", () => {
          this.subscribe();
        });
    }
  };
}

export default Observer;
