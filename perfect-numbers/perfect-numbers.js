//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/**
 * 
 * @param {number} number 
 */
export const classify = (number) => {
  if( number <= 0 ) throw new Error('Classification is only possible for natural numbers.')
  if( isPrime(number) ) return 'deficient'
  let sum = 0;
  for(let n = 1; n < number; n++) {
    if( number % n === 0 ) sum += n;
  }
  return sum === number ? 'perfect' : sum > number ? 'abundant' : 'deficient';
};

/**
 * 
 * @param {number} number 
 * @return {boolean}
 */
function isPrime(number) {
  for(let i = 2; i < number; i++) {
    if( number % i === 0 ) return false
  }
  return true
}
