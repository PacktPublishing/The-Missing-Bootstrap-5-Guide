bootstrap.Tooltip.Default.delay = 1000;

var tooltipElementList = document.querySelectorAll('.tooltipOnClick');
for (var i = 0; i < tooltipElementList.length; i++) {
    new bootstrap.Tooltip(tooltipElementList[i], { trigger: 'click' })
}