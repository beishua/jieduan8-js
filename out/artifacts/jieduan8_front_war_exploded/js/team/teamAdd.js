function teamAdd(){
//取得页面的值
    let teamCode= $("#teamCode").val();
    let teamName= $("#teamName").val();
    let result=myAjax('team/add','post', {teamCode:teamCode,teamName:teamName});
    if (result.count==1){
        $('#right').load('/back/Team/teamManage.html');
    }else if (result.count==2){
        document.getElementById("teamTip").innerHTML="该小组已存在!";
        document.getElementById("teamTip").style.color = "red";
    } else {
        alert("添加失败！");
    }
}
// function cel(){
//     $('#right').load('/back/Team/teamManage.html');
// }
