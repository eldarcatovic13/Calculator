let calculatorSum = document.getElementById("calculatorSum")

function display(a){
    calculatorSum.innerText += a
}

function ac(){
    calculatorSum.innerText = ''
}

function equal(){
    calculatorSum.innerText = eval(calculatorSum.innerText)
}