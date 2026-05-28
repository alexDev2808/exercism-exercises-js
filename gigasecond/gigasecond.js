//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Generates a random starship registry number.
 * @param {Date} date
 * @returns {Date} the appointment
 */
export const gigasecond = (date) => {
  const GS = 1e12;
  // const initialDate = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(),date.getUTCSeconds());
  // return new Date(initialDate + 1000000000000);
  console.log(date.getTime());
  return new Date(date.getTime() + GS);
};

 console.log(gigasecond(new Date(Date.UTC(2011, 3, 25))));