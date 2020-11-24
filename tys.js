function NextPage(name) {
    location.href = name;
}
function Add(num1, num2) {
    return num1 + num2;
}
function Subtract(num1, num2) {
    if (num1 > num2) {
        return num1 - num2;
    }
    return num2 - num1;
}
function Logger(num1) {
    console.log(num1);
}
function NewAlert(str) {
    alert(str);
}
function AlertNumber(num) {
    alert(num);
}
function PrintCount(cnt) {
    document.getElementById("Count").innerHTML = cnt;
}
function ClickCounting() {
    cnt += 1;
    PrintCount(cnt.toString());
}
var cnt = 0;
