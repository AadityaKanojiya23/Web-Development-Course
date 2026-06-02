const initial = Number(prompt("Enter initial balance: "));
const account = new BankAccount(initial);

while (true) {
    console.log("\n1. Deposit");
    console.log("2. Withdraw");
    console.log("3. Check Balance");
    console.log("4. Exit");

    let choice = prompt("Choose option: ");

    if (choice === "1") {
        let amount = Number(prompt("Enter deposit amount: "));
        account.deposit(amount);
    } 
    else if (choice === "2") {
        let amount = Number(prompt("Enter withdraw amount: "));
        account.withdraw(amount);
    } 
    else if (choice === "3") {
        console.log("Current Balance:", account.Balance);
    } 
    else if (choice === "4") {
        console.log("Thank you 🙏");
        break;
    } 
    else {
        console.log("Invalid choice");
    }
}
