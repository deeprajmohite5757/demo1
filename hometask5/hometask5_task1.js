Array.prototype.square = function () {
  let arr = [];
  this.forEach((num) => {
    arr.push(num * num);
  });
  return arr;
};

Array.prototype.cube = function () {
  let arr = [];
  this.forEach((num) => {
    arr.push(num * num * num);
  });
  return arr;
};

Array.prototype.sum = function () {
  let result = 0;
  this.forEach((num) => {
    result = result + num;
  });
  return result;
};

Array.prototype.average = function () {
  let result = 0;
  this.forEach((num) => {
    result = result + num;
  });
  return result / this.length;
};

Array.prototype.even = function () {
  let arr = [];
  this.forEach((num) => {
    if (num % 2 == 0) arr.push(num);
  });
  return arr;
};

Array.prototype.odd = function () {
  let arr = [];
  this.forEach((num) => {
    if (num % 2 != 0) arr.push(num);
  });
  return arr;
};
