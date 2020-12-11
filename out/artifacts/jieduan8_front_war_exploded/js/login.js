 function flushCode(object) {
    // document.getElementById("getCode").;
    // $(object).attr("src","http://localhost:8081/code?date=" + new Date());
}
function login() {
    let userName = $("#userName").val();
    let password = $("#password").val();
    // let code=$("#code").val();
    let reg = /^[a-zA-Z]\w{5,15}$/;
    if (!reg.test(userName)) {
        alert("您输入的用户名不正确！");
        return;
    }
    if (!reg.test(password)) {
        alert("您输入的密码不正确！");
        return;
    }
    let result = myAjax("user/login", "post", {userName: userName, password: password});
    if (result.result == 1) {
        window.open("/back/manage.html");
    } else if (result.result == 0) {
        alert("您输入的用户名或密码不正确,用户被冻结！");
    } else if (result.result == 2) {
        alert("您输入的验证码不正确！");
    }
}


