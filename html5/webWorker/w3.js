
//接收
/*this.onmessage=function (ev) {

};*/
let xml=new XMLHttpRequest();
xml.open('get','a.txt',false);
console.log("成功的打开了一个ajax请求");