
var result = document.getElementById("result");

function getNumber(num) {
    result.value += num;
}

function clearResult() {
    result.value = "";
}

function getResult() {


    result.value = eval(result.value);



}

function deletNum() {

    result.value = result.value.slice(0, -1)
}