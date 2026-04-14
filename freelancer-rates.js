// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour))
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const costPerDay = dayRate(ratePerHour)
  const fullMonthsDays = Math.floor(numDays / 22) * 22
  const remainingDays = numDays - fullMonthsDays
  const subtotalMonth = costPerDay * fullMonthsDays
  const totalWithDiscount = subtotalMonth - (subtotalMonth * discount)
  return Math.ceil(totalWithDiscount + costPerDay * remainingDays)
}


const result = priceWithMonthlyDiscount(89, 230, 0.42)
// console.log(result)




export function setItem(cards, position, replacementCard) {
    cards[position] = replacementCard
    return cards
}


const position = 2;
const replacementCard = 6;
console.log(setItem([1, 2, 4, 1], position, replacementCard));

// console.log('Wuling Hongguang' > 'Toyota Corolla')

function birdsInWeek(birdsPerDay, week) {
  let total = 0;
  const final = week * 7;
  for(let i = final - 7; i < final; i++) {
    total += birdsPerDay[i];
  }
  return total;
}

export function fixBirdCountLog([...birdsPerDay]) {
  for(let i = 0; i < birdsPerDay.length; i+=2) {
    birdsPerDay[i] = birdsPerDay[i] + 1
  }
  return birdsPerDay;
}

const birdsPerDay = [2, 5, 0, 7, 4, 1];
// console.log(fixBirdCountLog(birdsPerDay));
// console.log(birdsPerDay)


