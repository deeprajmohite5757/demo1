function cache(func) {
  let cache_arr = {};
  return function(arg1, arg2) {
    const key = JSON.stringify(arg1,arg2);
    if (!(key in cache_arr)){
      result = func(arg1,arg2);
      cache_arr[key] = result;
    }
    return cache_arr[key];
  }
}