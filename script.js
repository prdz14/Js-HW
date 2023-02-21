// A
var age = +prompt('Введите ваш возраст')
var forename = prompt('Введите вашe имя')

if (age > 0 && age <= 18) {
    alert('Вы еще молоды ' + forename)
} else if (age > 18 && age <= 50) {
    alert('Вам нужно работать ' + forename)
} else if (age > 50 && age <= 59) {
    alert('Вам скоро на пенсию ' + forename)
} else if (age > 59 && age <= 100) {
    alert('Вы пенсионер ' + forename)
} else {
    alert('Что-то пошло не так')
}
// A

// Б
var time = +prompt('Введите время в цифрах')

switch (time) {
    case 0:
        alert('12:00')
        break;
    case 1:
        alert('1:00')
        break;
    case 2:
        alert('2:00')
        break;
    case 3:
        alert('3:00')
        break;
    case 4:
        alert('4:00')
        break;
    case 5:
        alert('5:00')
        break;
    case 6:
        alert('6:00')
        break;
    case 7:
        alert('7:00')
        break;
    case 8:
        alert('8:00')
        break;
    case 9:
        alert('9:00')
        break;
    case 10:
        alert('10:00')
        break;
    case 11:
        alert('11:00')
        break;
    case 12:
        alert('12:00')
        break;
    case 13:
        alert('1:00')
        break;
    case 14:
        alert('2:00')
        break;
    case 15:
        alert('3:00')
        break;
    case 16:
        alert('4:00')
        break;
    case 17:
        alert('5:00')
        break;
    case 18:
        alert('6:00')
        break;
    case 19:
        alert('7:00')
        break;
    case 20:
        alert('8:00')
        break;
    case 21:
        alert('9:00')
        break;
    case 22:
        alert('10:00')
        break;
    case 23:
        alert('11:00')
        break;

    default:
        break;
}
// Б

// С
var a = +prompt('Введите 1 число')
var b = +prompt('Введите 2 число')
var c = +prompt('Введите 3 число')

if (a > b && a < c) {
    alert(a)
} else if (a > c && a < b) {
    alert(a)
} else if (a > c && a > b && c < b) {
    alert(b)
} else if (a < c && b > c) {
    alert(c)
} else if (b > a && b < c) {
    alert(b)
} else if (c < b && c > a) {
    alert(c)
}
// С