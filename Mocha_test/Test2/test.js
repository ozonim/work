describe("pow", function() {
//Begin describe("возводит x в степень n", function() 
  describe("возводит x в степень n", function() {

    function makeTest(x) {
      var expected = x * x * x;
      it("при возведении " + x + " в степень 3 результат: " + expected, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });
//End first describe "возводит x в степень n",

  it("при возведении в отрицательную степень результат NaN", function() {
    assert.isNotNaN((pow(2, -1)), "Ошибка функции на отрицательное значение");
  });

  it("при возведении в дробную степень результат NaN", function() {
     assert.isNotNaN(pow(2, 1.5), "Ошибка функции дробное выражение");
   });
  
// Begin describe("любое число, кроме нуля, в степени 0 равно 1"
   describe("любое число, кроме нуля, в степени 0 равно 1", function() {

     function makeTest(x) {
       it("при возведении " + x + " в степень 0 результат: 1", function() {
        assert.equal(pow(x, 0), 1);
      });
     }

    for (var x = -5; x <= 5; x += 2) {
       makeTest(x);
     }

   });
  
 //End Begin describe("любое число, кроме нуля, в степени 0 равно 1"

   it("ноль в нулевой степени даёт NaN", function() {
     assert.isNotNaN(pow(0, 0), "Ошибка 0 в степени 0 == NaN");
   });

 });
//   http://plnkr.co/edit/nRj3LNnHn8CcQxr4iJoo?p=preview     Образец