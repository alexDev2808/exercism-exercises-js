//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (adn) => {
  const dnaToRna = {
    'C': 'G',
    'G': 'C',
    'T': 'A',
    'A': 'U'
  }

  return adn.split('').map(l => dnaToRna[l]).join('')

};
