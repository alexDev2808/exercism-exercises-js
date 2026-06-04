//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  reopened = false;
  constructor() {
    this._balance = 0;
    this.isOpen = false;
  }

  open() {
    if( this.isOpen ) throw new ValueError();
    this.isOpen = true;
  }

  close() {
    if( !this.isOpen) throw new ValueError();
    this.isOpen = false;
    this.reopened = true;
  }

  deposit(amount) {
    if (!this.isOpen) {
      throw new ValueError();
    }
    if (amount < 0) throw new ValueError();
    this._balance += amount;
  }

  withdraw(amount) {
    if (!this.isOpen) throw new ValueError();
    if (amount > this._balance || amount < 0) throw new ValueError();
    this._balance -= amount;
  }

  get balance() {
    if (!this.isOpen) throw new ValueError();
    if (this.reopened) return 0;
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
