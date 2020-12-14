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
    data.startCreateTime=$("#startCreateTime").val();
    data.endCreateTime=$("#endCreateTime").val();
    let result = myAjax('team/getGroup', 'post', data);
    setData(result.list);
    $("#pageCount").html(result.number);
}
function setData(data){
    let html='';//字符串拼接
    for (let i=0;i<data.length;i++){
        html += '   <tr>\n' +
            '            <td>' + data[i].id + '</td>\n' +
            '            <td>' + (data[i].teamCode == undefined || data[i].teamCode == 'null' ? '' : data[i].teamCode) + '</td>\n' +
            '            <td>' + (data[i].teamName == undefined || data[i].teamName == 'null' ? '' : data[i].teamName) + '</td>\n' +
            '            <td>' + (data[i].leaderName == undefined || data[i].leaderName == 'null' ? '' : data[i].leaderName) + '</td>\n' +
            '            <td>' + (data[i].createTime == undefined || data[i].createTime == 'null' ? '' : data[i].createTime) + '</td>\n' +
            '            <td>' + (data[i].updateTime == undefined || data[i].updateTime == 'null' ? '' : data[i].updateTime) + '</td>\n' +
            '            <td><a href="javascript:see(' + data[i].id + ')">查看成员</a> <a href="javascript:allocation(' + data[i].id + ')">分配成员</a></td>\n' +
            '        </tr>';
    }
    $("#groupFindAll").html(html);//对当前的tbody进行赋值
}