function squareSum(numbers){
  return numbers.reduce((acc, number) =>  number ** 2 + acc, 0)
}