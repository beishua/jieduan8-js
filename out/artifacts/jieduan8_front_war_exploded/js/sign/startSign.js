function start() {
    let userName = $("#userName").val();
    let result = myAjax("sign/start", "post", {userName: userName});
    if (result.result!=1){
        alert("你不是组长，没有权限签到！");
    }else {
        window.open("/back/Sign/signManage.html");
    }
}