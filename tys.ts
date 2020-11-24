function NextPage(name:string){
    location.href= name;
}
function Add(num1:number, num2:number){
    return num1 + num2 ;
}
function Subtract(num1:number, num2:number){
    if(num1 > num2){
        return num1-num2;
    }
    return num2-num1;
}
function Logger(num1:number){
    console.log(num1);
}
function NewAlert(str:string){
    alert(str);
}
function AlertNumber(num:number){
    alert(num);
}
function PrintCount(cnt:string) {
    document.getElementById("Count").innerHTML = cnt;
}
function ClickCounting(){
    cnt+=1;
    PrintCount(cnt.toString());
}
let cnt:number = 0;

