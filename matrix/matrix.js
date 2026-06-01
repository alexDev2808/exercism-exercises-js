//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixInput) {
    this._matrixString = matrixInput.split('\n');
  }

  get rows() {
    return this._matrixString.map(row => row.split(' ').map(num => parseInt(num)));
  }

  get columns() {
    return this.rows[0].map((_, c) => this.rows.map(row => row[c]));
  }
}
