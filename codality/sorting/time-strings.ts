// 7. Sorting of array that contains date var dates = ['1/2/2019' , '11/12/2013', '1/1/1980', '11/1/1934']
function sortArray(arr: Array<string>) {
  return arr
    .map((el) => new Date(el))
    .map((date: Date) => date.getTime())
    .sort((a, b) => a - b)
    .map((date) => new Date(date))
    .map(
      (date) => `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    );
}
