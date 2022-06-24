var tooltipDOMelement = document.getElementById('tooltipDOM');
var tooltipDOM = new bootstrap.Tooltip(tooltipDOMelement);

var tooltipCSS = new bootstrap.Tooltip('#tooltipCSS');

var tooltipLoopElements = document.querySelectorAll('.tooltipLoop');
for (var i = 0; i < tooltipLoopElements.length; i++) {
  new bootstrap.Tooltip(tooltipLoopElements[i])
}

var tooltipMapElements = [].slice.call(document.querySelectorAll('.tooltipMap'));
var tooltipMap = tooltipMapElements.map(function(tooltipMapElement) {
  return new bootstrap.Tooltip(tooltipMapElement)
});