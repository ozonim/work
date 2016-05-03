// describe("pow", function() {
//     it("при возведении в отрицательную степень результат NaN", function() {
//     assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
//   });
// });
//  function pow(x, n) {
//       if (n < 0) return NaN;
//       if (x == 0 && n == 0) return NaN;
//       if (n !== Math.round(n)) return NaN;
//       var result = 1;
//       for (var i = 0; i < n; i++) {
//         result *= x;
//       }
//       return result;
//     }
   describe("возводит x в степень n", function() {
     
     function switchValue(x, n) {
       var result = 1;
      
          for (var i = 0; i < n; i++) {
           result *= x;
          }
        it("Возводит x= "+ x + " в степень n= "+ n + "result = "+ result, function() {
            assert.equal(pow(x, n), result);
           });
        }
      for (var y = 0; y < 5; y++) {
       for (var j = 0; j < 5; j++) {
         switchValue(y, j);
        }
      }
    });
   
    // var k = "strict";
    // var b = 1;
    // var c = NaN; 
    
    //console.log(pow(0, 0));
    //console.log("0*0:", 0*0);
    //console.log(pow(1, 0));
    //console.log(isNaN(pow(0, 0));
    