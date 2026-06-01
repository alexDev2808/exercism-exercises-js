//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet.split('').every(l => sentence.toLowerCase().includes(l));
};
