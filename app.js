const Account = require('./src/account.js');
const AccountActivity = require('./src/accountActivity.js');


const accountActivity = new AccountActivity(
    new Account()
);

module.export = accountActivity;