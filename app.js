var val = document.getElementById('input');
var val_1 = 0;
var val_2 = 0;
var operators = ["+", '-', 'x', '/'];
var op;

function c() {
    val.value = "";
}

function num1() {
    val.value += 1;
}

function num2() {
    val.value += 2;
}

function num3() {
    val.value += 3;
}

function num4() {
    val.value += 4;
}

function num5() {
    val.value += 5;
}

function num6() {
    val.value += 6;
}

function num7() {
    val.value += 7;
}

function num8() {
    val.value += 8;
}

function num9() {
    val.value += 9;
}

function num0() {
    val.value += 0;
}

function sum() {
    // val_1 = 0;
    // val_1 = Number(val.value);
    val.value += '+';
}

function sub() {
    // val_1 = 0;
    // val_1 = Number(val.value);
    val.value += '-';
}

function mul() {
    // val_1 = 0;
    // val_1 = Number(val.value);
    val.value += 'x';
}

function div() {
    // val_1 = 0;
    // val_1 = Number(val.value);
    val.value += '/';
}

function cal_val_1(b) {
    val_1 = 0;
    var arr = Array.prototype.slice.call(b);
    var states = -1;
    var number = 0;
    for (var i = 0; i < 4; i++) {
        states = arr.indexOf(operators[i]);
        if (states != -1) {
            op = i;
            break;
        }
    }
    number = arr.splice(0, (states));
    number.reverse();
    for (var j = 0; j < number.length; j++)
        number[j] = Number(number[j]);
    for (j = 0; j < number.length; j++)
        for (i = 0; i < j; i++)
            number[j] *= 10;
    for (j = 0; j < number.length; j++)
        val_1 += number[j];
}

function cal_val_2(a) {
    val_2 = 0;
    var arr = Array.prototype.slice.call(a);
    var states = -1;
    var number = 0;
    for (var i = 0; i < 4; i++) {
        states = arr.indexOf(operators[i]);
        if (states != -1) {
            op = i;
            break;
        }
    }
    number = arr.splice((states + 1), (arr.length - 1));
    number.reverse();
    for (var j = 0; j < number.length; j++)
        number[j] = Number(number[j]);
    for (j = 0; j < number.length; j++)
        for (i = 0; i < j; i++)
            number[j] *= 10;
    for (j = 0; j < number.length; j++)
        val_2 += number[j];
}

function result() {
    cal_val_1(val.value);
    cal_val_2(val.value);

    if (op == 0) val.value += " = " + (val_1 + val_2);
    if (op == 1) val.value += " = " + (val_1 - val_2);
    if (op == 2) val.value += " = " + (val_1 * val_2);
    if (op == 3) val.value += " = " + (val_1 / val_2);

}