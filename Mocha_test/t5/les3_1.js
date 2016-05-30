  
'use strict'

function checkSpam(str) {
 var v = "viagra", x = "xxx";  
 if ( ~str.toLowerCase().indexOf(v, 0) ) {
 	  
     return true;
    } else if ( ~str.toLowerCase().indexOf(x, 0) ) {
     return true;
    } else {
    return false;
    }   
}
//var check = "Lorem ipsGm dolor sIt amet, conSectetur adipiDiCing elit. Id officiis, Tempore. Nesciunt praesentium nemo, adipisci quasi minima officiis alias fugit error quibusdam eos delectus dolorem facilis laborum temporibus, sit quia".

///console.log( checkSpam("HkhkLh; kJHFvIaGRaljfkh yI 7it80 tu"));




