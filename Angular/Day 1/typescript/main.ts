class Account {
  accNo: number;
  balance: number;
  constructor(accNo, bal) {
    this.accNo = accNo;
    this.balance = bal;
  }
  debitAmount() {}
  creditAmount() {}
  getBalance() {}
}

interface IAccount {
  dateOfOpening: number;
  addCustomer();
  removeCustomer();
}
class AAA extends Account implements IAccount {
  dateOfOpening: number;
  constructor(accNo, bal, public interestRate = 0.1) {
    super(accNo, bal);
  }

  addCustomer() {}
  removeCustomer() {}
}
class BBB extends Account implements IAccount {
  dateOfOpening: number;
  constructor(accNo, bal, public interestRate = 0.1) {
    super(accNo, bal);
  }
  addCustomer() {}
  removeCustomer() {}
}
