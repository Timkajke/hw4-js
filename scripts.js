// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

/* var startOfRange = +prompt("Enter start of range");
var endOfRange = +prompt("Enter end of range");
var sum = 0;
if (startOfRange < endOfRange) {
    for (startOfRange; startOfRange <= endOfRange; startOfRange++) {
        sum += startOfRange;
    }
    alert(sum);
}
else {
    alert("Enter right range!");
} */

// Запросить 2 числа и найти только наибольший общий делитель.

/* var firstNumber = +prompt("Enter first number");
var secondNumber = +prompt("Enter second number");
var mostDivisor = 0;
if (firstNumber <= secondNumber && firstNumber > 0 && secondNumber > 0) {
    for (var i = 1; i <= firstNumber; i++) {
        if (firstNumber % i === 0 && secondNumber % i === 0) {
            mostDivisor = i;
        }
    }
    alert(mostDivisor);
}
else if (secondNumber < firstNumber && firstNumber > 0 && secondNumber > 0) {
    for (var i = 1; i <= secondNumber; i++) {
        if (firstNumber % i === 0 && secondNumber % i === 0) {
            mostDivisor = i;
        }
    }
    alert(mostDivisor);
}
else {
    alert('Oops! Something went wrong! Try again.');
} */

// Запросить у пользователя число и вывести все делители этого числа

/* var number = +prompt("Enter number to find out his divisors");
if (number > 0) {
    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}
else {
    console.log("Oops! Something went wrong! Try again!");
} */

// Определить количество цифр в введенном числе.

/* var number = +prompt("Enter number to find out how many digits is has");
var quantityOfDigits = 0;
if (number === 0) {
    quantityOfDigits = 1;
    console.log(`You number has ${quantityOfDigits} digits`);
}
else {
    for (quantityOfDigits; number >= 1; quantityOfDigits++) {
        number /= 10;
    }
    console.log(`You number has ${quantityOfDigits} digits`);
} */

// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
// При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. 
// Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

/* НЕ РЕШЕНО */

// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, 
// вывести результат и спросить, хочет ли он решить еще один пример. 
// И так до тех пор, пока пользователь не откажется

/* do {
    var firstNumber = +prompt("Enter first number");
    var secondNumber = +prompt("Enter second number");
    var operand = prompt("Enter operand");
    switch (operand) {
        case "+":
            alert(`Your result is: ${firstNumber + secondNumber}`);
            break;
        case "-":
            alert(`Your result is: ${firstNumber - secondNumber}`);
            break;
        case "*":
            alert(`Your result is: ${firstNumber * secondNumber}`);
            break;
        case "/":
            if (secondNumber > 0) {
                alert(`Your result is: ${firstNumber / secondNumber}`);
                break;
            }
            else {
                alert("Wrong operation! Try again!");
                break;
            }
        default:
            alert("Wrong operation! Try again!");
            break;
    }
}
while (confirm("Do you want to try again?")); */

