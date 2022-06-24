var modal = document.getElementById('modal');
var tooltip = new bootstrap.Tooltip('#tooltip');

modal.addEventListener('shown.bs.modal', function (event) {
  tooltip.show();
})