class AccountActivity{
  constructor(account, format){
  this.account = account;
  this.format = format;

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

printStatement(){
    return this.format.printStatement(this.account.activities)
}

}



module.exports = AccountActivity;