//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(n) {
    this._n = n;
  }

  get sumOfSquares() {
    // let sum = 0;
    // for (let i = 1; i <= this._n; i++) {
    //   sum += i ** 2;
    // }
    // return sum;
    return this._n * (this._n + 1) * (2*this._n + 1)/6;
  }

  get squareOfSum() {
    // let sum = 0;
    // for (let i = 1; i <= this._n; i++) {
    //   sum += i;
    // }
    // return sum ** 2;
    return Math.pow((this._n * (this._n + 1)/2), 2);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
