$(document).ready(function () {
  const checkedAmenities = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      checkedAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete checkedAmenities[$(this).data('id')];
    }
    const list = Object.values(checkedAmenities);
    if (list.length > 0) {
      $('div.amenities > h4').text(Object.values(checkedAmenities).json(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});
