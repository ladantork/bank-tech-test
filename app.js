const Account = require('./src/account.js');
const AccountActivity = require('./src/accountActivity.js');
const Statement = require('./src/statement.js');


const accountActivity = new AccountActivity(
    new Account(),
    new Statement()
);

module.export = accountActivity;

