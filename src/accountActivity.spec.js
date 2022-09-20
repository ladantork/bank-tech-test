const AccountActivity = require('./accountActivity.js');
const Account = require('./account.js');

describe('AccountActivity',()=>{
  beforeAll(()=>{
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2023-01-10'));
  });
  describe('new account activities',()=>{
    const accountActivity = new AccountActivity(
        new Account()
    );

    it ('returns balance as 0',()=>{
        expect(accountActivity.displayBalance()).toEqual('your balance is 0.');
    });

    it('shows a user to made deposit',()=>{
        accountActivity.credit(50);
        expect(accountActivity.displayBalance()).toEqual('your balance is 50.'); 
    });

    it('shows when user withdrawal is greater than their balance they will go overdraft',()=>{
        accountActivity.debit(60);
        expect(accountActivity.displayBalance()).toEqual('your balance is -10.');
    })

  });
   


});