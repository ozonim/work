describe("checkSpam", function() {
  it('разный регистр', function() {
    assert.strictEqual(checkSpam("buy ViAgRA now"), true);
  });

  it('большое кол-во проверяемых знаков x', function() {
    assert.strictEqual(checkSpam("free xxxxx"), true);
  });
   it('разные регистры х', function() {
    assert.strictEqual(checkSpam("before XxX"), true);
  });
  
  it('не содержит слов для проверки', function() {
    assert.strictEqual(checkSpam("innocent rabbit"), false);
  });
});