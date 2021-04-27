var Cat = (function () {
  const cats = [];

  function Cat(name, weight) {
    if (!name || !weight) throw "invalid parameters";
    Object.defineProperty(this, "name", {
      get: () => name,
    });
    Object.defineProperty(this, "weight", {
      get: () => weight,
      set: (value) => (weight = value),
    });
    cats.push(this);
  }

  Cat.averageWeight = () =>
    cats.reduce((acc, cat) => acc + cat.weight, 0) / cats.length;
  
  return Cat;
})();
