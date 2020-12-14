function register() {
    let userName= $("#userName2").val();
    let password= $("#password").val();
    let result=myAjax('user/userRegister','post',{userName:userName,password:password});
            if (result.result==1){
                window.open("/login.html");
            }else if (result.result==4){
                document.getElementById("nameTip").innerHTML="用户名已存在，请重新输入!";
                document.getElementById("nameTip").style.color = "red";
            }else{
                alert("注册失败！");
            }
}
function checkPassword() {
    //局部变量
    let password=document.getElementById("password").value;
    let rePassword=document.getElementById("rePassword").value;
    if (password!=rePassword){
        document.getElementById("passwordTip").innerHTML="两次密码输入不一致，请重新输入!";
        document.getElementById("passwordTip").style.color = "red";
    }else {
        document.getElementById("passwordTip").innerHTML = "密码输入一致!";
        document.getElementById("passwordTip").style.color = "green";
    }
}
