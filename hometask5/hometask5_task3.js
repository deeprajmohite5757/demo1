
function construct(Class) {
  object = new (Function.prototype.bind.apply(Class, arguments));  
  return object;
}