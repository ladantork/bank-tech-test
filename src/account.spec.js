const Account = require('./account.js');

describe ('Account',()=>{
  beforeAll(()=>{
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2023-01-10'));
  });

describe('user open new empty account',()=>{
  const account = new Account();
  it('display balance of zero',()=>{
    expect(account.balance).toEqualNull;
  });

  it('allows user to make deposit',()=>{
    account.deposit(20);
    expect(account.balance).toEqual(20);
  });

  it('allows user to withdraw',()=>{
    account.withdraw(5);
    expect(account.balance).toEqual(15);
  });

  it('shows account Activity',()=>{
    const array =[
      {
        balance :'20.00',
        credit:'20.00',
        date: new Date('2023-01-10'),
        debit:'0.00'
      },

      {
        balance :'15.00',
        credit:'0.00',
        date: new Date('2023-01-10'),
        debit:'5.00'
      },
    ];
    expect(account.activities).toEqual(array);
  });

});
});