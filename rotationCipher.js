// Create an implementation of the rotational cipher, also sometimes called the Caesar cipher.

// The Caesar cipher is a simple shift cipher that relies on transposing all the letters in the alphabet using an integer key between 0 and 26. Using a key of 0 or 26 will always yield the same output due to modular arithmetic. The letter is shifted for as many values as the value of the key.

// The general notation for rotational ciphers is ROT + <key>. The most commonly used rotational cipher is ROT13.

// A ROT13 on the Latin alphabet would be as follows:

// Plain:  abcdefghijklmnopqrstuvwxyz
// Cipher: nopqrstuvwxyzabcdefghijklm

// It is stronger than the Atbash cipher because it has 27 possible keys, and 25 usable keys.

// Ciphertext is written out in the same formatting as the input including spaces and punctuation.
// Examples

//     ROT5 omg gives trl
//     ROT0 c gives c
//     ROT26 Cool gives Cool
//     ROT13 The quick brown fox jumps over the lazy dog. gives Gur dhvpx oebja sbk whzcf bire gur ynml qbt.
//     ROT13 Gur dhvpx oebja sbk whzcf bire gur ynml qbt. gives The quick brown fox jumps over the lazy dog.



export const rotate = (text, rotation) => {
    if( rotation < 0 || rotation > 26 ) return "Rotación incorrecta!"
    const plainAlphaMinus = "abcdefghijklmnopqrstuvwxyz"
    const plainAlphaMayus = plainAlphaMinus.toUpperCase()
    const alphaRotatedMinus = plainAlphaMinus.slice(rotation) + plainAlphaMinus.slice(0, rotation)
    const alphaRotatedMayus = alphaRotatedMinus.toUpperCase()
    const textSeparated = text.split(" ")

    const textRotated = textSeparated.map( palabra => palabra.split("").map( letra => {
        if( alphaRotatedMinus.includes(letra) ) {
            return alphaRotatedMinus[plainAlphaMinus.indexOf(letra)]
        } 
        if( alphaRotatedMayus.includes(letra) ) {
            return alphaRotatedMayus[plainAlphaMayus.indexOf(letra)]
        }
        return letra
        
    }).join(""))
    
    return textRotated.join(" ")
    
};



const texto = "Gur dhvpx oebja sbk whzcf bire gur ynml qbt."
const rot = 13

console.log(texto)
console.log(rotate(texto, rot))