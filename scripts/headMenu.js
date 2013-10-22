function imgGoTo(){
	var link = $(this).attr('link');
	window.open(link, '_blank');
}
$(document).ready(function(){
	$('#partners img').click(imgGoTo);
});