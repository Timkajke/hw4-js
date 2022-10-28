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

// Запросить у пользователя число и на сколько цифр его сдвинуть.
// Сдвинуть цифры числа и вывести результат
// (если число 123456 сдвинуть на 2 цифры, то получится 345612).

/* let number = prompt('Введите число', '');
let step = +prompt('На сколько сдвинуть', '0');
let array = number.split(''); // разбивает строку на массив по заданному разделителю
for (let i = 0; i < step; i++) {
  array.push(array.shift()); // shift - извлекает элемент с начала, push - добавляет элемент в конец
}
alert(array.join``); // создаёт строку из элементов array, вставляя `` между ними */

// Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

/* const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currentDay = 0;
while (confirm(`${daysOfWeek[currentDay]}. Хотите увидеть следующий день?`)) {
    currentDay = (currentDay + 1) % daysOfWeek.length;
} */

// Вывести таблицу умножения для всех чисел от 2 до 9.
// Каждое число необходимо умножить на числа от 1 до 10.

/* for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 11; j++) {
        document.write(i*j+"&nbsp");
    }
    document.write("<br \/>");
} */

// Игра «Угадай число». Предложить пользователю загадать
// число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам,
// записываете результат в N и спрашиваете у пользователя
// «Ваше число > N, < N или == N?». В зависимости от того
// что указал пользователь, уменьшаете диапазон. Начальный
// диапазон от 0 до 100, поделили пополам и получили 50.
// Если пользователь указал, что его число > 50, то изменили
// диапазон на от 51 до 100. И так до тех пор, пока пользова-
// тель не выберет == N.

let number = +prompt("Enter an asking number from 0 to 100!");
let numberToAnswer = +prompt("Enter a number!");
