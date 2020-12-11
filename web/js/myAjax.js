function myAjax(url, type, data) {
    let temp = null;
    let params=data==null?"":JSON.stringify(data);//转换成字符串
    $.ajax({
        url: 'http://localhost:8081/' + url,
        data: params,
        type: type,
        contentType:"application/json;charset=UTF-8",
        async: false,
        // xhrFields: {
        //     withCredentials: true //允许跨域带Cookie
        // },
        crossDomain:true,
        dataType: 'json',
        success: function (data) {
            temp = data;
        }
    })
    return temp;
}

function imgMyAjax(url, type, data) {
    let result = null;
    $.ajax({
        url: "http://localhost:8080" + url,
        type: type,
        data: data,
        async: false,
        xhrFields: {
            withCredentials: true //允许跨域带Cookie
        },
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function (data) {//data后台传递到前台的数据
            result = data;
        }
    });
    return result;
}