$(function () {
    findById();
})
function findById() {
    let data=myAjax('team/findById','post',{teamCode:sessionStorage.getItem("teamCode")});
    setData(data.result);
    setTeamLeader(data.list);
}
function setData(data) {
    $("#teamName").val(data.teamName);
    $("#teamCode").val(data.teamCode);
}
function edit() {
    let data = {
        teamName: $("#teamName").val(),
        leaderName: $("select option:checked").text(),
        teamCode:$("#teamCode").val(),
        leaderCode:$("#leaderName").val(),

    };
    console.log(data);
    let result = myAjax('team/teamEdit','post',data);
    if (result.count==1){
        $(".right").load("/back/Team/teamManage.html");
    } else {
        alert("修改失败！");
    }
}
function teamEditClear() {
    document.getElementById("teamName").value="";
}
function setTeamLeader(){
    let data= myAjax("team/leaderName","post",{teamCode:sessionStorage.getItem("teamCode")});
    console.log(data)
    data=data.list;
    let html='';
    for (let i=0;i<data.length;i++){
        html+= '<option value="' + data[i].userCode + '">'+data[i].userName+'</option>';
    }
    $("#leaderName").html(html);
}