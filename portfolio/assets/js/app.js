$(document).ready(function() { //gets page ready for JS to be executed
	$("#bio-btn").click(function() {
		$("#bio").slideToggle(900, 'swing');
	});
	blogOutput();
});
// JSON HANDLER

function blogOutput() {
	var posts = [];
	$.getJSON('assets/js/blogging.json', function(data) { //used to get JSON data using an AJAX HTTP GET request
		$(data.entries).each(function(index, value) { //for each loop looping through the key/values 
			var p = '<small class="date">' + value.date + '</small> '; //html output
			p += '<h3 class="blog-title">' + value.title + '</h3>';
			p += '<div class="blogPosts">' + '<p class="blogPosts">' + value.text + '</p>' + '</div>' + '<hr class="blog-hr">';
			posts.push(p); //pushes data into post array
		});
		document.write(p);
		console.log("this");
	});
	/* $('#search').keyup(function() { //.keyup triggers search box when keys are pressed in it
		var searchField = $('#search').val();
		// console.log(searchField);
		if (searchField != -1) {
			posts = [];
			var regExpress = new RegExp(searchField, "i");
			$.getJSON('assets/js/blogging.json', function(data) {
				$(data.entries).each(function(index, value) {
					if ((value.date.search(regExpress) != -1) || (value.title.search(regExpress) != -1) || (value.text.search(regExpress) != -1)) {
						var p = '<small class="date">' + value.date + '</small> ';
						p += '<h3 class="blog-title">' + value.title + '</h3>';
						p += '<div class="blog-div">' + '<p class="blogPosts">' + value.text + '</p>' + '</div>' + '<hr class="blog-hr">';
						posts.push(p);
					} //if statement
					requestPage(posts, 1);
				}); //each function
			}); //getJSON
		}
	});
}

function requestPage(page, pn) {
	//POPULATING PAGE WITH BLOG POSTS
	var tp = page.length; //total posts
	var ipp = 3; //items per page
	var last = Math.ceil(tp / ipp); //number of pages
	var items = "";
	if (last < 1) {
		last = 1;
	}
	if (pn < 1) {
		pn = 1;
	}
	for (var i = (pn - 1) * ipp; i < ipp * pn; i++) {
		if ('undefined' === typeof page[i]) {} else {
			items += page[i];
		}
	}
	$('.blog-post').html(items).show();
	
}