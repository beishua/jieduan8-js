$(function () {
    findById();

})
function findById() {
    // let id=sessionStorage.getItem("userId")
    let result=myAjax('user/findById','post',{id:sessionStorage.getItem("userId")});
            setData(result.result);
}
function setData(data) {
    $("#userId").val(data.id);
    $("#userName1").val(data.userName);
    $("#phone").val(data.phone);
    $("#age").val(data.age);
    $("#address").val(data.address);
    $("#school").val(data.school);
    $("#head").val(data.head);
    $("input[name='sex'][value="+data.sex+"]").attr("checked",true);
    $("input[name='team'][value="+data.team+"]").attr("checked",true);
    $("input[name='education'][value="+data.education+"]").attr("checked",true);
    $("input[name='role'][value="+data.role+"]").attr("checked",true);
    $("input[name='state'][value="+data.state+"]").attr("checked",true);
}
function edit() {
    let data = {
        id: $("#userId").val(),
        userName: $("#userName1").val(),
        password: $("#password").val(),
        phone: $("#phone").val(),
        age: $("#age").val(),
        head: $("#head").val(),
        school: $("#school").val(),
        address: $("#address").val(),
        sex: $("input[name='sex']:checked").val(),
        team: $("input[name='team']:checked").val(),
        education: $("input[name='education']:checked").val(),
        role: $("input[name='role']:checked").val(),
        state: $("input[name='state']:checked").val(),
    };
    let result = myAjax('user/userEdit', 'post', data);
            if (result.count==1){
                $(".right").load("/back/User/userManage.html");
            } else {
                alert("修改失败！");
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
        document.getElementById("passwordTip").innerHTML = "密码一致!";
        document.getElementById("passwordTip").style.color = "green";
    }
}