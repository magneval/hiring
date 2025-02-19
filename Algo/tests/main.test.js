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

test(
  '2 display 2',
  () =>
  {
    expect(Fizzbuzz(2)).
      toBe(2);
  }
);

test(
  '3 display Fizz',
  () =>
  {
    expect(Fizzbuzz(3)).
      toBe("Fizz");
  }
);

test(
  '4 display 4',
  () =>
  {
    expect(Fizzbuzz(4)).
      toBe(4);
  }
);

test(
  '5 display Buzz',
  () =>
  {
    expect(Fizzbuzz(5)).
      toBe("Buzz");
  }
);
