//
//  
'use strict'

function checkSpam(str) {
  var y = false;
 for (var j = 0; j < str.length; j++) {   
     if ( str.charAt(j) == "v" || str.charAt(j) == "V" &&
         str.charAt(j + 1) == "i" || str.charAt(j + 1) == "I" &&
         str.charAt(j + 2) == "a" || str.charAt(j + 2) == "A" &&
         str.charAt(j + 3) == "g" || str.charAt(j + 3) == "G" &&
         str.charAt(j + 4) == "r" || str.charAt(j + 4) == "R" &&
         str.charAt(j + 5) == "a" || str.charAt(j + 5) == "A") {
         y = true; 
         console.log(str.charAt(j));
       }
   }  
       
}
console.log(checkSpam("bAfore vImhgmgfmhgfmhgfhmgfhmgc"));



