jQuery(document).ready(function( $ ) {

	var navItems = $("nav li"); //nav list items
	var modId = $("section"); //divs with ID's
	

	var points = [];

	for (var i = 0; i < modId.length; i++) {
		var thismod = modId.eq([i]);
		var thismodID = thismod.attr("id")
		for (var j = 0; j < navItems.length; j++) {
			var thisnavhref = navItems.find('a').eq([j]).attr("href").slice(1);
			if(thismodID == thisnavhref) {
				points.push([[j],thismod.offset().top]);
			}
		}
	}

	function lookup(location) {
		
		var offset = $(window).height() * .2;
		var activeLocation = offset + location;

		for (var x = 0; x < points.length; x++) {

			var nextItem = x + 1;

			if( points[x]  === 0) {
				var currectItemValue = 0;
			} else {
				var currectItemValue = points[x][1];
			}

			if(points.length + 1 === nextItem + 1) {
				var nextItemValue = 10000000;
			} else {
				var nextItemValue = points[nextItem][1];
			}

			if(currectItemValue < activeLocation &&  activeLocation < nextItemValue) {
				navItems.eq(points[x][0]).addClass('active');
			} else {
				navItems.eq(points[x][0]).removeClass('active');
			}
		}
	};

	window.onscroll = function() {
		var currentpos = $(document).scrollTop();
		lookup(currentpos);
	};

	window.onresize = function() {
		var currentpos = $(document).scrollTop();
		lookup(currentpos);
	}


});