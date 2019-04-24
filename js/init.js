$(window).on("load", function () {
	$(window).scroll(function () {
		var windowBottom = $(this).scrollTop() + $(this).innerHeight();
		$(".fade").each(function () {
			/* Check the location of each desired element */
			var objectBottom = $(this).offset().top + $(this).outerHeight();

			/* If the element is completely within bounds of the window, fade it in */
			if (objectBottom < (windowBottom - 80)) { //object comes into view (scrolling down)
				if ($(this).css("opacity") == 0) {
					$(this).animate({ opacity: 1 }, { duration: 100, queue: false });
					$(this).animate({ "margin-top": "10px" }, { duration: 500, queue: false });
				}
			}
		});
	}).scroll(); //invoke scroll-handler on page-load
});

