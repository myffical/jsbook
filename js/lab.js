(function() {

$(document).ready(function() {
	setupCM({"code": "pre code.html"}, {"mode": "htmlmixed"});
	setupCM({"code": "pre code.js"}, {"mode": "javascript"});
	makeRunnableWithTests();
	makeAccordian();
});

})();

var makeAccordian = function() {
	$("h3").each(function() {
		var header = $(this);
		var block = header
			.nextUntil("h3")
			.wrapAll("<div class='accordian-content'></div>")
			.parent();
		var link = header
			.wrap("<a href='#' class='accordian-link'></a>")
			.parent();
		link.click(function() {
			$(".accordian-content").not(block).slideUp();
			block.slideDown();
		});
	})
	$(".accordian-content").hide();
}

var test = function(cmd, actual, expected) {
	if (actual === expected) {
		console.log("PASSED: " + cmd + ") returned " + actual)
	} else {
		console.log("PASSED: " + cmd + ") returned " + actual + ", expected " + expected)
	}
};
