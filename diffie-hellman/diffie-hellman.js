//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    if( p < 1 || g < 1 ) throw new Error('Arguments are out of range');
    if( !this._isPrime(p) || !this._isPrime(g) ) throw new Error('Arguments are not prime');
    this.p = p
    this.g = g
  }

  _isPrime(number) {
    let counter = 0;
    for(let i = 1; i <= number; i++){
      if( number % i === 0 ) counter += 1
    }
    return counter === 2;
  }

  getPublicKey(privateKey) {
    if( privateKey < 0 ) throw new Error('Private key is negative')
    if( privateKey === 0 ) throw new Error('Private key is zero')
    if( privateKey === 1 ) throw new Error('Private key is one')
    if( privateKey === this.p ) throw new Error('Private key is equals to modulos p')
    if( privateKey > this.p ) throw new Error('Private key is greater than modulos p')
    return this.g ** privateKey % this.p
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.p
  }

  static getPrivateKey(p) {
    return Math.floor(Math.random() * (p - 2)) + 2
  }

}