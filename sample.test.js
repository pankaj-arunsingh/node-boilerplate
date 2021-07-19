const { isPalindrome, average, promiseFunc } = require('./sample');

describe('sample tests', () => {
  test('returns false when not palindrome', () => {
    const str = isPalindrome('pankaj');
    expect(str).toBe(false);
  });
  test('returns true when palindrome', () => {
    const str = isPalindrome('jojoj');
    expect(str).toBe(true);
  });
});

describe('average', () => {
  test('of one value is the value itself', () => {
    expect(average([1])).toBe(1);
  });

  test('of many is calculated right', () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
  });

  test('of empty array is zero', () => {
    expect(average([])).toBe(0);
  });
});
describe('promise tests', () => {
  test('promise resolves correctlly', async () => {
    const result = await promiseFunc();
    expect(result.message).toBe('hello world');
  });
});
