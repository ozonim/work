// describe("pow", function() {
//     it("при возведении в отрицательную степень результат NaN", function() {
//     assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
//   });
// });
 function pow(x, n) {
      if (n < 0) return NaN;
      if (x == 0 && n == 0) return NaN;
      var result = 1;
      for (var i = 0; i < n; i++) {
        result *= x;
      }
      return result;
    }
    
    // var k = "strict";
    // var b = 1;
    // var c = NaN; 
    // alert(pow(-33, 1));
    //console.log(pow(0, -1));
    //console.log("0*0:", 0*0);
    //console.log(pow(1, 0));
    var num = 13.24;
    alert( num.match(/\d+\.\d+/ig) ); 
    
    var num=1538.9891200153;
num_str=num.toFixed(); //num_str=1538;
num_str=num.toFixed(2); //num_str=1538.98;
num_str=num.toFixed(5); //num_str=1538.98912;
