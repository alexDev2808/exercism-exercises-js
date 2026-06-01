//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * 
 * @param {string} message 
 */
export const hey = (message) => {
  const responses = {
    question: "Sure.",
    capital_letters: "Whoa, chill out!",
    yelling_question: "Calm down, I know what I'm doing!",
    silence: "Fine. Be that way!",
    default: "Whatever."
  }

  if( /^.*\? *$|\s\w+\? *$/.test(message) ) {
    if( /^[A-Z\s?]+$/g.test(message) ){
      return responses.yelling_question;
    }
    return responses.question;
  }
  if( /^\s{0,}$/.test(message) ) return responses.silence;
  if( /^[0-9A-Z|\W]+[A-Z\W]+$/g.test(message) ) return responses.capital_letters;
  return responses.default;
}
