function Counter() {
  this.obervers = [];
}

Counter.prototype = {
  subscribe: function (fn) {
    this.obervers.push(fn);
  },
  unsuscribe: function (fn) {
    this.obervers = this.obervers.filter((_fn) => fn !== _fn);
  }
};

const counter = new Counter();

function render() {
  const container = document.getElementById("Counter");
  if (container) {
    container.innerHTML = `
  <label>Value:</label>
  <input type="number" id="value" name="value"
         min="1" max="10" value="0">
  `;
  }
  document.getElementById("value").addEventListener("change", (e) => {
    counter.obervers.forEach((fn) => {
      fn(e.target.value);
    });
  });
}

export default {
  render,
  counter
};
