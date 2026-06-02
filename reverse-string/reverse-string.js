//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  const segmentador = new Intl.Segmenter('es', { granularity: 'grapheme' });
  const letras = Array.from(segmentador.segment(string), s => s.segment);
  return letras.reverse().join('');
};


export const reverseString2 = (string) => {
  return [...string].map((_, idx, arr) => arr[arr.length - 1 - idx]).join('');
}