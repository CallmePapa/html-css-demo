
//接收
this.onmessage=function (ev) {
    console.log('我得到了'+ev.data);
    //处理任务
    let sum=ev.n1+ev.n2;
    //返回
    this.postMessage(sum);
};