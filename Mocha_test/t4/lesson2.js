//
//  
'use strict'

function ucFirst(str) {
 if (!str) return str;
  
  var rez = str[0].toUpperCase();
  
  for(var i = 1; i < str.length; i++) {
    rez += str[i];
  }
   return rez;
}
console.log(ucFirst(""));

/////////////////////////////////////

