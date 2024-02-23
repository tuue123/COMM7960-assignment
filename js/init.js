//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "25 feb 2024 23:59:59",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	