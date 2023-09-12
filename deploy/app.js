// bank account class
class BankAccount {
  constructor(accountHolder, accountType) {
    this.accountHolder = accountHolder;
    this.accountType = accountType;
    // initial balance
    this.balance = 1000.0;
  }

  deposit(amount) {
    if (amount <= 0 || isNaN(amount)) {
      throw new Error("Invalid amount");
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0 || isNaN(amount)) {
      throw new Error("Invalid amount");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
  }
}

// initialize the bank account
const account = new BankAccount("John Doe", "Savings");

// dom elements
const accountHolderElement = document.getElementById("account-holder");
const accountTypeElement = document.getElementById("account-type");
const balanceElement = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const balanceButton = document.getElementById("check-balance");
const transactionResultElement = document.getElementById("transaction-result");

// update account information
function updateAccountInfo() {
  accountHolderElement.textContent = account.accountHolder;
  accountTypeElement.textContent = account.accountType;
  balanceElement.textContent = account.balance.toFixed(2);
}

// handle user actions with a switch statement
function performAction(action) {
  try {
    const amount = parseFloat(amountInput.value);
    switch (action) {
      case "deposit":
        account.deposit(amount);
        transactionResultElement.textContent = `Deposited $${amount.toFixed(
          2
        )}`;
        break;
      case "withdraw":
        account.withdraw(amount);
        transactionResultElement.textContent = `Withdrawn $${amount.toFixed(
          2
        )}`;
        break;
      case "balance":
        transactionResultElement.textContent = `Balance: $${account.balance.toFixed(
          2
        )}`;
        break;
      default:
        throw new Error("Invalid action");
    }
    updateAccountInfo();
  } catch (error) {
    transactionResultElement.textContent = `Error: ${error.message}`;
  } finally {
    amountInput.value = "";
  }
}

// button click event listeners
depositButton.addEventListener("click", () => performAction("deposit"));
withdrawButton.addEventListener("click", () => performAction("withdraw"));
balanceButton.addEventListener("click", () => performAction("balance"));

// initial account info update
updateAccountInfo();
