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
const transactionResultElement = document.getElementById("transaction-result");

// update account information
function updateAccountInfo() {
  accountHolderElement.textContent = account.accountHolder;
  accountTypeElement.textContent = account.accountType;
  balanceElement.textContent = account.balance.toFixed(2);
}

// deposit button click event
depositButton.addEventListener("click", () => {
  try {
    const amount = parseFloat(amountInput.value);
    account.deposit(amount);
    updateAccountInfo();
    transactionResultElement.textContent = `Deposited $${amount.toFixed(2)}`;
  } catch (error) {
    transactionResultElement.textContent = `Error: ${error.message}`;
  } finally {
    amountInput.value = "";
  }
});

// withdraw button click event
withdrawButton.addEventListener("click", () => {
  try {
    const amount = parseFloat(amountInput.value);
    account.withdraw(amount);
    updateAccountInfo();
    transactionResultElement.textContent = `Withdrawn $${amount.toFixed(2)}`;
  } catch (error) {
    transactionResultElement.textContent = `Error: ${error.message}`;
  } finally {
    amountInput.value = "";
  }
});

// initial account info update
updateAccountInfo();
