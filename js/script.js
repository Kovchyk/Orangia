// to make divs .about, .friends, .idea the same height if some content is added to the each one.
$( document ).ready(function() {
	setMaxHeight();
}); 

$( window ).resize(function() {
   setMaxHeight();
});

function getHeights(arr) {
	var heights = [];

	arr.each(function() {
		$(this).css("height", "auto");
		heights.push( $(this).outerHeight() );
	});

	return heights;
}

function getMaxHeight(arr) {
	for (var i = 0; i < 1; i++) {
		var temp = 0;

		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] > arr[i]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}

		return arr[0];
	}
}

function setMaxHeight() {
	var divs = $("#footer .border");
	var heights;
	var maxHeight;

	heights = getHeights(divs);
	maxHeight = getMaxHeight(heights);
	// to make divs .about, .friends, .idea the same height if some content is added to the each one.
	divs.css("height", maxHeight);
}