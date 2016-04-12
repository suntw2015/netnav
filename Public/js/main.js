/**
 * Created by Administrator on 2016/4/12.
 */


$("#btn-search").click(function(){
    var content = $("#input-search").val();
    window.open("https://www.baidu.com/s?wd="+content);
});

$("#input-search").keydown(function(e){
    console.log(e.which);
    if(e.which == 13){
        $("#btn-search").click();
    }
})