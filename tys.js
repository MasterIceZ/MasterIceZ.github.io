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
function ClickCounting() {
    //let cnt:number = 1;
    cnt += 1;
    //let print:string = cnt.toString();
    AlertNumber(cnt);
    //Logger(cnt);
}
var cnt = 0;
