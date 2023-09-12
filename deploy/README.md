# Bank Account Management

The website provides a simulated bank account management system that allows users to interact with a bank account using JavaScript. The website incorporates classes, switch statements, and try-catch-finally blocks for a basic yet educational experience.

## Getting Started

To use the website, follow these steps:

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in a modern web browser (e.g., Chrome, Firefox).
3. You will see a user interface for bank account management.

### Features

#### Bank Account Class

A `BankAccount` class is used to model a bank account with the following properties:

- Account Holder Name
- Account Type
- Balance (initialized to $1000.00)

#### Switch Statement

The website incorporates a switch statement to handle user actions, including:

- `Deposit`: Increase the account balance.
- `Withdraw`: Decrease the account balance.
- `Balance`: Display the current account balance.
- `Invalid Action`: Handle any other invalid actions gracefully.

#### Try-Catch-Finally Blocks

Exception handling is implemented using try-catch-finally blocks to ensure that user interactions are error-free:

- `Invalid Amount`: If the user enters an invalid amount (e.g., negative or non-numeric), an error message is displayed.
- `Insufficient Funds`: If the user tries to withdraw more than the available balance, an error message is displayed.
- `Other Errors`: Any other errors, such as invalid actions or unexpected issues, are also caught and displayed to the user.

#### Usage

1. Enter an amount in the input field.
2. Click on one of the two buttons: "Deposit," or "Withdraw."
3. The result of the operation or any errors will be displayed in the "Transaction Result" section.
4. The account holder name, account type, and balance are displayed at the top of the page.

#### Note

This is a basic educational example and should not be used for real-world banking purposes. Real banking applications require robust security measures and are subject to strict regulations.

Feel free to explore, modify, and enhance this code as a starting point for more complex web applications or for learning purposes.
