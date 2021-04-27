function add(num1) {
  const sum = (num2) => {
    return add(num1 + num2);
  };

  sum.valueOf = function () {
    return num1;
  };

  return sum;
}