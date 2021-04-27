function isSantaClausable(obj) {
  arr = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney']
   return arr.every(function(methodName){
     return typeof obj[methodName] == 'function';
   });
}