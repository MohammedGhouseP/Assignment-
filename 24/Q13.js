function createBankAccount(initialValue){
    let balance = initialValue;

    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited: ${amount}. New balance: ${balance}`);
            } else {
                console.log("Deposit amount must be positive.");
            }
        },
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: ${amount}. New balance: ${balance}`);
            } else {
                console.log("Invalid withdrawal amount.");
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

const myAccount = createBankAccount();
console.log(myAccount.getBalance()); 
console.log(myAccount.deposit(100)); 
console.log(myAccount.withdraw(50));