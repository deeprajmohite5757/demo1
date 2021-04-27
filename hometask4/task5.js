function compose(...arg) {
  return function() {
    let length = arg.length;
    if(length == 0)
      return arguments[0];
    else{
      let result = arg[--length].apply(this,arguments);
      while(length!=0){
        --length;
        result = arg[length](result);
      }
      return result;
    }
  };
}