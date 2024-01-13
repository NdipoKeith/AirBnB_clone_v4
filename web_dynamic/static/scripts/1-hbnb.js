$.(document).ready(function() {
	let checkedAmenities = {};
	$(document).on('change', "input[type='checkbox']", fucntion() {
		if (this.checked) {
			checkedAmenities[$(this).data('id')] = $(this).data('name');
		} else {
			delete checkedAmenities[$(this).data('id')];
		}
		let list = object.calues(checkedAmenities);
		if (list.length > 0) {
			$('div.amenities > h4').text(object.values(checkedAmenities).json(', '));
		} else {
			$('div.amenities > h4').html('&nbsp;');
		}
	});
});
