class AccountActivity{
  constructor(account){
  this.account = account;

}
displayBalance(){
 return `your balance is ${this.account.balance}.`;
}

credit(money){
    return this.account.deposit(money);
}

debit(money){
    return this.account.withdraw(money);
}

}

module.exports = AccountActivity;