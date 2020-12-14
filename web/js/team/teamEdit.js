$(function () {
    findById();
})
function findById() {
    let result=myAjax('team/findById','post',{id:sessionStorage.getItem("teamId")});
    setData(result.result);
    setTeamLeader(result)
}
function setData(data) {
    $("#teamId").val(data.id);
    $("#teamName").val(data.teamName);
    $("#teamLeader").val(data.teamLeader);
}
function edit() {
    let data = {
        id: $("#teamId").val(),
        teamName: $("#teamName").val(),
        teamLeader: $("#teamLeader").val(),
    };
    let result = myAjax('team/teamEdit','post',data);
    if (result.count==1){
        $(".right").load("/back/Team/teamManage.html");
    } else {
        alert("修改失败！");
    }
}
function teamEditClear() {
    document.getElementById("teamName").value="";
    document.getElementById("teamLeader").value="";
}
function setTeamLeader(teamCode){
    let data= myAjax("/leaderName","post",{teamCode:teamCode});
    let html='';
    for (let i=0;i<data.length;i++){
        html+= '<div>'+data[i].teamCode+'</div>';
    }
    $("#teamLeader").html(html);
    setData(data.list);
}