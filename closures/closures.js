console.log("Hi from Closures");

function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}

const counter = outer();

counter();
counter();


function createAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            console.log("Balance after deposit: ", balance);
        },
        withdraw(amount) {
            balance -= amount;
            console.log("Balance after withdraw: ", balance);
        },
        getBalance() {
            console.log("Balance", balance);
        }
    }
}

const account = createAccount(10000);

account.getBalance();
account.deposit(1000);
account.withdraw(500);
account.getBalance();



function coffeeMachine(sugarLevel) {
    return function makeCoffee() {
        console.log("Making your coffee with sugar level ", sugarLevel);
    }
}

const myCoffee = coffeeMachine();
myCoffee();