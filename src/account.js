class Account{
    constructor(){
        let balance = 0;
        this.newBalance = (money)=>(balance = money);
        this.getBalance = ()=> balance;

        let activities = [];
        this.getActivities =()=> activities;
        this.addActivities = (activityMode)=> activities.push(activityMode);


    }

    get balance(){
        return this.getBalance();
    }

    get activities(){
        return this.getActivities();
    }

    activity(credit, debit){
        this.addActivities({
         date: new Date(),
         credit : credit.toFixed(2),
         debit : debit.toFixed(2),
         balance: this.getBalance().toFixed(2),
        });
    }
    deposit(money){
        this.newBalance(this.getBalance() + money);
        this.activity(money, 0);
    }

    withdraw(money){
        this.newBalance(this.getBalance() - money);
        this.activity(0, money);
    }
    
}

module.exports = Account;
