function imgGoTo(){
	var link = $(this).attr('src').substr(7);
	window.open('http:////'+link.substr(0,link.indexOf('/')), '_blank');
}
$(document).ready(function(){
	$('#partners img').click(imgGoTo);
});