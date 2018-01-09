$(document).ready(function() {
	$('.content').hide();
	toggle("#IJIC");
	toggle("#ITS2K1");
	toggle("#IMPC");
	toggle("#IATRC");
	toggle("#IPUN")
});
function toggle(elem) {
	$(elem).on('click', function(event) {
		var target = $(event.currentTarget).siblings(0);
		switch (elem) {
			case '#IJIC':
				$(target[0]).slideToggle(700);
				break;
			case '#ITS2K1':
				$(target[2]).slideToggle(700);
				break;
			case '#IMPC':
				$(target[4]).slideToggle(700);
				break;
			case '#IATRC':
				$(target[6]).slideToggle(700);
				break;
			case '#IPUN':
				$(target[8]).slideToggle(700);
				break;
			default:
				break;
		}
	});
}