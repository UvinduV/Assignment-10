var display = document.getElementById("display-bar");
$("#clear").on('click', () => {
    display.value ='';
})

/*Numbers*/

$("#btn7").on('click', () => {
    display.value +='7';
})
$("#btn8").on('click', () => {
    display.value +='8';
})
$("#btn9").on('click', () => {
    display.value +='9';
})

$("#btn4").on('click', () => {
    display.value +='4';
})
$("#btn5").on('click', () => {
    display.value +='5';
})
$("#btn6").on('click', () => {
    display.value +='6';
})

$("#btn1").on('click', () => {
    display.value +='1';
})
$("#btn2").on('click', () => {
    display.value +='2';
})
$("#btn3").on('click', () => {
    display.value +='3';
})
$("#btn0").on('click', () => {
    display.value +='0';
})
$("#point").on('click', () => {
    display.value +='.';
})

/*operators*/

$("#Addition").on('click', () => {
    display.value +='+';
})
$("#Subtraction").on('click', () => {
    display.value +='-';
})
$("#Multiply").on('click', () => {
    display.value +='*';
})
$("#Divide").on('click', () => {
    display.value +='/';
})


$("#Equals").on('click', () => {
    display.value =eval(display.value);
})