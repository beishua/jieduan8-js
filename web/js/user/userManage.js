//加载页面的时候执行里面的方法
$(function () {
    $("#page").load("/back/page.html");
})
//根据条件查询
function findAll(){
    let data={};
    data.pageNum = $.trim($("#pageNum").val());
    data.pageSize = $.trim($("#pageSize").val());
    data.userName=$.trim($("#userName1").val());
    data.phone=$.trim($("#phone").val());
    data.sex=$("#sex").find("option:selected").text();
    data.team=$("#team").find("option:selected").text();
    data.education=$("#education").find("option:selected").text();
    data.role=$("#role").find("option:selected").text();
    data.state=$("#state").find("option:selected").text();
    data.startDate=$("#startDate").val();
    data.endDate=$("#endDate").val();
    let result = myAjax('user/getUsers', 'post', data);
        setData(result.list);
        $("#pageCount").html(result.number);
}
function setData(data) {
    let html='';//字符串拼接
    for (let i=0;i<data.length;i++){
        html += '   <tr>\n' +
            '            <td>' + data[i].id + '</td>\n' +
            '            <td>' + (data[i].userName == undefined || data[i].userName == 'null' ? '' : data[i].userName) + '</td>\n' +
            '            <td>' + (data[i].age == undefined || data[i].age == 'null' ? '' : data[i].age) + '</td>\n' +
            '            <td>' + (data[i].sex == undefined || data[i].sex == 'null' ? '' : data[i].sex) + '</td>\n' +
            '            <td>' + (data[i].team == undefined || data[i].team == 'null' ? '' : data[i].team) + '</td>\n' +
            '            <td>' + (data[i].education == undefined || data[i].education == 'null' ? '' : data[i].education) + '</td>\n' +
            '            <td>' + (data[i].school == undefined || data[i].school == 'null' ? '' : data[i].school) + '</td>\n' +
            '            <td>' + (data[i].address == undefined || data[i].address == 'null' ? '' : data[i].address) + '</td>\n' +
            '            <td>' + (data[i].phone == undefined || data[i].phone == 'null' ? '' : data[i].phone) + '</td>\n' +
            '            <td>' + (data[i].head == undefined || data[i].head == 'null' ? '' : data[i].head) + '</td>\n' +
            '            <td>' + (data[i].state == undefined || data[i].state == 'null' ? '' : data[i].state) + '</td>\n' +
            '            <td>' + (data[i].date == undefined || data[i].date == 'null' ? '' : data[i].date) + '</td>\n' +
            '            <td>' + (data[i].updateTime == undefined || data[i].updateTime == 'null' ? '' : data[i].updateTime) + '</td>\n' +
            '            <td><a href="javascript:edit(' + data[i].id + ')">编辑</a> <a href="javascript:del(' + data[i].id + ')">删除</a></td>\n' +
            '        </tr>';
    }
    $("#userFindAll").html(html);//对当前的tbody进行赋值
}
function edit(id) {
    sessionStorage.setItem("userId",id);
    $('#right').load('/back/User/userEdit.html');
}
function del(id) {
    let result=myAjax('user/del','post',{id:id});
            if (result.result == 1) {
                alert("操作不可逆，确认删除？")
                findAll();//刷新页面
            } else {
                alert("删除失败！")
            }
}
function uClear() {
    document.getElementById("userName1").value="";
    document.getElementById("phone").value="";
    document.getElementById("sex").value="0";
    document.getElementById("team").value="4";
    document.getElementById("education").value="5";
    document.getElementById("role").value="4";
    document.getElementById("state").value="2";
    document.getElementById("startDate").value="";
    document.getElementById("endDate").value="";
}