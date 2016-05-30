

    function getDecimal(num) {
        
       var res = num - (num ^ 0); 
       var x = +res.toFixed(3);
       return x = (x < 0) ? -x : x;
    }
      