
//接收
this.onmessage=function (ev) {

    //处理任务
    let oDiv=ev.data;
    oDiv.style.background="red";
    //返回
    /*this.postMessage(oDiv);*/
};