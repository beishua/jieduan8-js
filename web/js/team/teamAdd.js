function teamAdd(){
//取得页面的值
    let data=new FormData();
    data.append("teamCode",$("#teamCode").val());
    // data.append("teamName",$("#picture")[0].files[0]);
    data.append("teamName",$("#teamName").val());
    //调用后台
    let result=myAjax('team/add','post',data);
    if (result.count==1){
        $('#right').load('/back/Team/teamManage.html');
    }else if (result.count==2){
        document.getElementById("teamTip").innerHTML="该小组已存在!";
        document.getElementById("teamTip").style.color = "red";
    } else {
        alert("添加失败！");
    }
}
function cel(){
    $('#right').load('/back/Team/teamManage.html');
}
