let  = {

name:'Cort',
expenses: 0,
income: 0

}



addExpense = function (account, amount) {

    account.expenses = account.expenses+amount
}

addIncome = function (account, amount){
    account.income = account.income + amount
}

resetAccount = function (account){

    account.name = 'N/A';
    account.expenses = 0;
    account. income = 0;

}

getAccountSummary = function (account){

   let balance = account.income - account.expenses

    console.log(`Account for ${account.name} has $${balance}. 
    $${account.income} in income. 
    $${account.expenses} in expenses.`)
}



addExpense(myAccount,250)
addIncome(myAccount,500)
addExpense(myAccount,100)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)