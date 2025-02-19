function Fizzbuzz(value)
{
  res =
    "";
  if (value % 3 === 0)
  {
    res =
      res + "Fizz"
  }
  if (value % 5 === 0)
  {
    res =
      res + "Buzz"
  }
  if (res === "")
  {
    res =
      value;
  }
  return res;
}

module.exports =
  Fizzbuzz;
