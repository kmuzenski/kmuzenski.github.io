$(document).ready(function() {

Blog();

});

var Blog = function() {

$.getJSON('assets/js/blogging.json',function(data){
	$(data.entries).each(function(index,value){
		var p = '<small class="date">' + value.date + '</small>';
		p += '<h3 class="blog-title">' + value.title + '</h3>';
		p += '<div class="blog-div">' + '<p class="blogPosts">' + value.text + '</p>' + '</div>' + '<hr class ="blog-hr">';

		posts.push(p);
		console.log(p);
		document.write(p);


	});


});



}