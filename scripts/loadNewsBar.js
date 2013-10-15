$(document).ready(function(){
	debugger;
	//$("div#bar").load("/newsBar.html");
	$.ajax({
            type: "GET",
            url: "/newsBar.html",
            success: function (data) {
                	$("div#bar").empty().html(data);
                },
        });
});