const AccountActivity = require('./accountActivity.js');
const Account = require('./account.js');
const Statement = require('./statement.js');

describe('AccountActivity',()=>{
  beforeAll(()=>{
    jest
      .useFakeTimers('modern')
      .setSystemTime(new Date('2023-01-10'));
  });
  describe('new account with o balance created',()=>{
    const accountActivity = new AccountActivity(
        new Account(),
        new Statement()
    );


    it ('returns balance as 0',()=>{
        expect(accountActivity.displayBalance()).toEqual('your balance is 0.');
    });

    it('prints a statement',()=>{
        expect(accountActivity.printStatement()).toEqual(
            'date || credit || debit || balance\n' 
        );
    });
});

describe('user deposits money , withdraw & print statement',()=>{
    const accountActivity = new AccountActivity(
        new Account(),
        new Statement()
    );

    it('shows a user to made deposit',()=>{
        accountActivity.credit(50);
        expect(accountActivity.displayBalance()).toEqual('your balance is 50.'); 
    });

    it('shows when user withdrawal the balance would be debit that amount',()=>{
        accountActivity.debit(10);
        expect(accountActivity.displayBalance()).toEqual('your balance is 40.');
    });

    it('prints a statement',() => {
        expect(accountActivity.printStatement()).toEqual(
            'date || credit || debit || balance\n10/1/2023 ||  || 10.00 || 40.00\n10/1/2023 || 50.00 ||  || 50.00\n'
        );
    });

  });
});
