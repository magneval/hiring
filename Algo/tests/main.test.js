const Fizzbuzz =
  require('../src/main.js');

test(
  '1 display 1',
  () =>
  {
    expect(Fizzbuzz(1)).
      toBe(1);
  }
);