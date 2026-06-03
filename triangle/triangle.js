//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this._sides = sides;
  }

  isUnequal() {
    const sides = this._sides;
    const sidesSorted = sides.sort((a, b) => a - b);
    return sidesSorted[0] + sidesSorted[1] <= sidesSorted[2];
  }

  get isEquilateral() {
    return !this.isUnequal() && this._sides.every(side => side === this._sides[0]);
  }

  get isIsosceles() {
    const sides = this._sides.sort((a, b) => a - b);
    return !this.isUnequal() && (sides[0] === sides[1] || sides[1] === sides[2]);
  }

  get isScalene() {
    const sides = this._sides.sort((a, b) => a - b);
    return !this.isUnequal() && sides[0] !== sides[1] && sides[1] !== sides[2];
  }
}
