//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Generates a random stardate.
 * @param {string} clientName
 * @param {number} ticketNumber
 * @returns {string} message
 */
// export const format = (clientName, ticketNumber) => {
//   const numStr = ticketNumber.toString();
//   let numberFormat = "";
//   if( ticketNumber < 20 ) numberFormat = getFormatNumber(ticketNumber);
//   else if( ticketNumber <= 110 ) numberFormat = getFormatNumber(numStr[numStr.length - 1]);
//   else {
//     const number = numStr[numStr.length - 2] === "1" ? 
//       numStr[numStr.length - 2] + numStr[numStr.length - 1] :
//       numStr[numStr.length - 1]
//     numberFormat = getFormatNumber(number)
//   }
//   return `${clientName}, you are the ${ticketNumber}${numberFormat} customer we serve today. Thank you!`;
// };

// export const getFormatNumber = (number) => {
//   const term = {
//       1: "st",
//       2: "nd",
//       3: "rd"
//   };
//   return term[number] ?? 'th'
// }

export const format = (name, number) => {
  let suffix = "th";
  if (number % 100 < 11 || number % 100 > 13) {
    if (number % 10 === 1) suffix = "st";
    else if (number % 10 === 2) suffix = "nd";
    else if (number % 10 === 3) suffix = "rd";
  }
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
};
