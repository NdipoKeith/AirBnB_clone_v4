$(document).ready(function() {
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
	$.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
		if (textStatus === 'success') {
			if (data.status === 'OK') {
				$('#api_status').addClass('available');
			} else {
				$('#api_status').removeClass('available');
			}
		}
	});
});
