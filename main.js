import inquirer from "inquirer";
let mybalance = 20000;
let mypin = 2030;
console.log(`your current balance is ${mybalance}`);
const answer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "enter your pin number",
});
if (answer.pin === mypin) {
    console.log("Correct pin code !!!");
    let oprationAns = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: "please select option",
        choices: ["withdraw", "check balance", "fastcash"],
    });
    if (oprationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "enter your amount",
        });
        if (amountAns.amount > mybalance) {
            console.log("Insufficient balance");
        }
        else {
            mybalance -= amountAns.amount;
            console.log(`your remening balance is ${mybalance}`);
        }
    }
    else if (oprationAns.operation === "check balance") {
        console.log(`your  balance is ${mybalance}`);
    }
    else if (oprationAns.operation === "fastcash") {
        let fastcash = await inquirer.prompt({
            name: "check",
            type: "list",
            message: "select your amount",
            choices: ["1000", "2000", "5000", "10000"],
        });
        fastcash.check === "1000";
        mybalance -= fastcash.check;
        console.log(`yor remening balance is ${mybalance}`);
    }
    else if (oprationAns.operation === "fastcash") {
        let fastcash = await inquirer.prompt({
            name: "check",
            type: "list",
            message: "select your amount",
            choices: ["1000", "2000", "5000", "10000"],
        });
        fastcash.check === "2000";
        mybalance -= fastcash.check;
        console.log(`yor remening balance is ${mybalance}`);
    }
    else if (oprationAns.operation === "fastcash") {
        let fastcash = await inquirer.prompt({
            name: "check",
            type: "list",
            message: "select your amount",
            choices: ["1000", "2000", "5000", "10000"],
        });
        let amount = parseInt(fastcash.check);
        if (amount > mybalance) {
            console.log("Insufficient balance");
        }
        else {
            mybalance -= amount;
            console.log(`Your remaining balance is ${mybalance}`);
        }
    }
}
else {
    console.log("Invalid pin");
}
