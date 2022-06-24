var tooltipDefault = new bootstrap.Tooltip('#tooltipDefault', { placement: "bottom" });

var tooltipOnLoad = new bootstrap.Tooltip('#tooltipOnLoad', { trigger: "manual", placement: "bottom" });
tooltipOnLoad.show();

var tooltipOnButtonClick = new bootstrap.Tooltip('#tooltipOnButtonClick', { trigger: "manual", placement: "bottom" });
var triggerForTooltip = document.getElementById('triggerForTooltip');
triggerForTooltip.addEventListener('click', function() {
  tooltipOnButtonClick.toggle();
})