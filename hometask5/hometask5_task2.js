// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function (string) {
  var para = string.split(".");
  let result = this;
  let flag = 1;
  para.forEach((element) => {
    if (element in result) {
      result = result[element];
    } else flag = 0;
  });
  if (flag == 1) return result;
};
