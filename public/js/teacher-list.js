define(['jquery','template'],function($,template) {
    // 调用接口 获取所有的讲师数据
    $.ajax({
        type : 'get',
        url : '/api/teacher',
        dataType : 'json',
        success : function(data) {
            //console.log(data);
            var html = template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);
        }
    })
})