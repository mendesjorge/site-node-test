var news;
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

var writeNews = function(){
	var elem = news;
	var data = $(this);
	console.log(data);
	elem.append("<br/>------------------------");
	elem.append("<br/><a href='"+data.attr("link")+"'>" + data.attr("title")+"</a>");
}

$(document).ready(function(){
	news = $($("div#news")[0]);
	var feed = new google.feeds.Feed(news.attr("link"));
	feed.load(function (data) {
	    // Parse data depending on the specified response format, default is JSON.
	    $(data.feed.entries).each(writeNews);
		 console.log(data);
	});
});
