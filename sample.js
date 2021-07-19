const isPalindrome = (str) => str.split('').reverse().join('') === str;
const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item;
  };

  return array.length ? array.reduce(reducer, 0) / array.length : 0;
};
const promiseFunc = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000, { message: 'hello world' });
  });
module.exports = { average, isPalindrome, promiseFunc };
