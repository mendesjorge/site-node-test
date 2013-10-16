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

function lineFunc(data,i){
	return i>0 ?"<li class='noshow'><a href='"+data.attr("link")+"'>" + data.attr("title")+"</a></li>"
		:"<li><a href='"+data.attr("link")+"'>" + data.attr("title")+"</a></li>";
}


var newsInitCallBack = function(){
	var feed = new google.feeds.Feed(news.attr("link"));

	feed.load(function (data) {
	    // Parse data depending on the specified response format, default is JSON.
	    $(data.feed.entries).each(function(i){
	    	news.find("ul").append(lineFunc($(this),i));
	    });

	     console.log(data);
	});
}


function changeScrolling(el1, el2){
	el1.slideUp('slow');
	el2.slideDown('slow');
}

$(document).ready(function(){
	news = $($("div#news")[0]);
	newsInitCallBack();

	var ulElem = news.find("ul");
    var scrolling,
    i = 0,
    speed = 2000;
    
    ulElem.mouseleave(function() {
    	var els = $(ulElem[0]).children();
		var lastIdx = els.length-1;

        scrolling = window.setInterval(function() {
            $(els[i]).slideUp('slow');
            i = i >= lastIdx ? 0 : i+1;
            $(els[i]).slideDown('slow');
        }, speed);
    });

    ulElem.mouseenter(function() {
        if (scrolling) {
            window.clearInterval(scrolling);
            scrolling = false;
        }
    });
    
    ulElem.mouseleave();

});

