function deactivateTooltips() {
    var tooltips = document.querySelectorAll('.tooltip');
    tooltipsLength = tooltips.length;
    for (var i = 0; i < tooltipsLength; i++) {
        tooltips[i].style.display = 'none';
    }
}

/*function getTooltip(elements) {

    while (elements = elements.nextSibling) {
        if (elements.className === 'tooltip') {
            return elements;
        }
    }
    return false;
}
*/
function getTooltip(el) {

    while (el = el.nextSibling) {
        if (el.className === 'tooltip')
        return el;
    }
    return false;
}


var check = {};
check['lastName'] = function (id) {
    var nom = document.getElementById(id),
        tooltipStyle = getTooltip(nom).style;
    if (nom.value.length >= 2) {
        tooltipStyle.display = 'none';
        nom.className = 'correct';
        return true;
    } else {
        nom.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

}
var myForm = document.getElementById('myForm');
inputs = document.querySelectorAll('input[type=text],input[type=password');
inputsLength = inputs.length;
for (var i = 0; i < inputsLength; i++) {
    inputs[i].addEventListener('keyup', function (e) {
        check[e.target.id](e.target.id);
    })
}


deactivateTooltips();