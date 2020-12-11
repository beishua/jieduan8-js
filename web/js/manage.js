$(function () {
    setUser();
})
function setUser() {
    let result=myAjax("user/manage","post","")
    // $.ajax({
    //     url:'http://localhost:8081/back/user/manage',
    //     data:'',
    //     type:'get',
    //     dataType:'json',
    //     xhrFields: {
    //         withCredentials: true //允许跨域带Cookie
    //     },
    //     async: false ,
    //     success:function(data){
            if (result.userName==null){
                window.open("/login.html");
            }else {
                $("#userName").html(result.userName); //对应servlet-输出语句中put值
            }
}