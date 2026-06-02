class BankAccount {
    #balance = 0 

    constructor(initialbalance){
        if (initialbalance < 0 ){
            console.log("Error/Invalid Balance");   
        }else if(initialbalance <= 0 ){
            this.#balance = initialbalance;
        }
    }

    get Balance() {
        return this.#balance
    }

    set Balance(amount){
        if (amount < 0){
            console.log("Invalid amount")
        }else {
            this.#balance = amount
        }
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount
            console.log(`Deposited: ${amount}`);
        }
    }

    withdrawn(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount
            console.log(`Withdraw: ${amount}`);
        }else {
            // console.log("Insufficiant Balance to WithDrawn  !!");
            throw new Error("Insufficiant Balance to WithDrawn  !!")
        }
    }
}

const Account = new BankAccount()
Account.deposit(200)
Account.deposit(300)
Account.withdrawn(100)
Account.withdrawn(100)
// Account.withdrawn(100)
// Account.withdrawn(100)
// Account.withdrawn(100)
// Account.withdrawn(100)

console.log(`Your Balance is : ${Account.Balance} Ruppes`);
// console.log(Account.deposit());

