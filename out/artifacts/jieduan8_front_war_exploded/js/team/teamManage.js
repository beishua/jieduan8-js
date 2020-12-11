$(function () {
    $("#page").load("/back/page.html");
})
function findAll(){
    let data={};
    data.pageNum = $.trim($("#pageNum").val());
    data.pageSize = $.trim($("#pageSize").val());
    data.teamCode=$.trim($("#teamCode").val());
    data.teamName=$.trim($("#teamName").val());
    data.teamLeader=$.trim($("#teamLeader").val());
    data.leaderName=$.trim($("#leaderName").val());
    data.teamSize=$.trim($("#teamSize").val());
    data.state=$("#state").find("option:selected").text();
    data.startCreateTime=$("#startCreateTime").val();
    data.endCreateTime=$("#endCreateTime").val();
    let result = myAjax('team/getTeam', 'post', data);
    setData(result.list);
    $("#pageCount").html(result.number);
    console.log(result);
}
function setData(data){
    let html='';//字符串拼接
    for (let i=0;i<data.length;i++){
        html += '   <tr>\n' +
            '            <td>' + data[i].id + '</td>\n' +
            '            <td>' + (data[i].teamCode == undefined || data[i].teamCode == 'null' ? '' : data[i].teamCode) + '</td>\n' +
            '            <td>' + (data[i].teamName == undefined || data[i].teamName == 'null' ? '' : data[i].teamName) + '</td>\n' +
            '            <td>' + (data[i].teamLeader == undefined || data[i].teamLeader == 'null' ? '' : data[i].teamLeader) + '</td>\n' +
            '            <td>' + (data[i].leaderName == undefined || data[i].leaderName == 'null' ? '' : data[i].leaderName) + '</td>\n' +
            '            <td>' + (data[i].teamSize == undefined || data[i].teamSize == 'null' ? '' : data[i].teamSize) + '</td>\n' +
            '            <td>' + (data[i].state == undefined || data[i].state == 'null' ? '' : data[i].state) + '</td>\n' +
            '            <td>' + (data[i].createTime == undefined || data[i].createTime == 'null' ? '' : data[i].createTime) + '</td>\n' +
            '            <td>' + (data[i].updateTime == undefined || data[i].updateTime == 'null' ? '' : data[i].updateTime) + '</td>\n' +
            '            <td><a href="javascript:edit(' + data[i].id + ')">编辑</a> <a href="javascript:del(' + data[i].id + ')">删除</a></td>\n' +
            '        </tr>';
    }
    $("#teamFindAll").html(html);//对当前的tbody进行赋值

}
function edit(id) {
    sessionStorage.setItem("teamId",id);
    $('#right').load('/back/Team/teamManage.html');
}
function del(id) {
    let result=myAjax('team/del','post',{id:id});
    if (result.result == 1) {
        alert("操作不可逆，确认删除？")
        findAll();//刷新页面
    } else {
        alert("删除失败！")
    }
}
function teamClear() {
    document.getElementById("teamCode").value="";
    document.getElementById("state").value="0";
    document.getElementById("startDate").value="";
    document.getElementById("endDate").value="";
}