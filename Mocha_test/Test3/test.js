 describe("возводит x в степень n", function() {
     
     function switchValue(x, n) {
       var result = 1;
      
          for (var i = 0; i < n; i++) {
           result *= x;
          }
        it("Возводит x= "+ x + " в степень n= "+ n + "result = "+ result, function() {
            assert.equal(pow(x, n), result);
           });