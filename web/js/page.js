function page(type){
    let pageNum = 1;
    //得到当前页数
    let aa = $.trim($("#pageNum").val());
    let num = aa == null || aa == "" ? 1 : parseInt(aa);
    num = num <1 ? 1 : num;
    //得到总条数
    let count = $("#pageCount").html();
    let pageCount = count == null || count == "" ? 1 : parseInt(count);
    //得到一页显示多少条数据
    let size = $.trim($("#pageSize").val());
    let pageSize = size == null || size == "" ? 10 : parseInt(size);
    pageSize = pageSize < 1 ? 10 : pageSize;
    //取得总页数
    let lastPage = Math.ceil(pageCount / pageSize);
// console.log(num,pageNum,lastPage);
    switch (type) {
        case 'g':
            if (num > lastPage) {
                pageNum = lastPage;
            } else {
                pageNum = num;
            }
            break;
        case 'f':
            pageNum = 1;
            break;
        case 'p':
            pageNum = num == null || num == "" ? 1 : parseInt(num);
            if (pageNum > 1) {
                --pageNum;
            }
            break;
        case 'n':
            pageNum = num == null || num == "" ? 1 : parseInt(num);
            if (pageNum != lastPage) {
                ++pageNum;
            }
            break;
        case 'l':
            pageNum = Math.ceil(pageCount / pageSize);
            break;
    }
    // console.log(pageNum, pageSize,type);
    $("#pageNum").val(pageNum);
    $("#pageSize").val(pageSize);
    findAll();
}
$(function () {
    page('');
})