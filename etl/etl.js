//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (objOld) => {
  return Object.keys(objOld).reduce((objNew, key) => {
    objOld[key].forEach(letter => {
      objNew[letter.toLowerCase()] = Number(key);
    });
    return objNew;
  }, {});
};