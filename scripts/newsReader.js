var news;
google.load("feeds", "1");
//google.load("feeds", "1");
/*$(document).ready(function(){
	$.get(FEED_URL, function (data) {
	    var news = $("#news");
	    $(data).find("entry").each(function () { // or "item" or whatever suits your feed
	        var el = $(this);

	        news.append("------------------------");
	        news.append("\ntitle      : " + el.find("title").text());
	        news.append("\nauthor     : " + el.find("author").text());
	        news.append("\ndescription: " + el.find("description").text());
	    });
	});
});*/

function lineFunc(data){
	return "<li><a href='"+data.attr("link")+"'>" + data.attr("title")+"</a></li>";
}


var newsInitCallBack = function(){
	var feed = new google.feeds.Feed(news.attr("link"));

	feed.load(function (data) {
	    // Parse data depending on the specified response format, default is JSON.
	    $(data.feed.entries).each(function(i){
	    	news.find("ul").append(lineFunc($(this)));
	    });

	     console.log(data);
	});
}

$(document).ready(function(){
	news = $($("div#news")[0]);
	newsInitCallBack();


	var ele = news.find("ul");

    var speed = 2000,
        scroll = 20,
        top = 0,
        maxTop = 60,
        scrolling;

    ele.mouseleave(function() {
        scrolling = window.setInterval(function() {
            top = top >= maxTop ? 0 : ele.scrollTop() + scroll;
            ele.scrollTop(top);
        }, speed);
    });

    ele.mouseenter(function() {
        if (scrolling) {
            window.clearInterval(scrolling);
            scrolling = false;
        }
    });
    
    ele.mouseleave();

});

