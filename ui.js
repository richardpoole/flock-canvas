// Code by Richard Poole: http://sycora.com/
// Licence for this file: http://creativecommons.org/licenses/MIT/

$(document).ready(function() {
	var canvas = document.getElementById('canvas');
    var controller = new FlockController(canvas);

    canvas.addEventListener('mousemove', function(e) {
        var offsetX = e.offsetX;
        var offsetY = e.offsetY;
        if (!offsetX || !offsetY) {
            offsetX = e.layerX - $(e.target).position().left;
            offsetY = e.layerY - $(e.target).position().top;
        }

        controller.setTarget(offsetX, offsetY);
    }, false);

    $('#numBoids').slider({
        range: 'min',
        value: 30,
        min: 5,
        max: 100,
        step: 5,
        slide: function(e, ui) { $('#numBoidsValue').text(ui.value); controller.updateOptions({numBoids: ui.value}); }
    });
    
    $('#frameRate').slider({
        range: 'min',
        value: 60,
        min: 5,
        max: 100,
        step: 5,
        slide: function(e, ui) { $('#frameRateValue').text(ui.value); controller.updateOptions({frameRate: ui.value}); }
    });
    
    $('#separationDistance').slider({
        range: 'min',
        value: 20,
        min: 0,
        max: 100,
        step: 10,
        slide: function(e, ui) { $('#separationDistanceValue').text(ui.value); controller.updateOptions({separationDistance: ui.value}); }
    });
    
    $('#separationPriority').slider({
        range: 'min',
        value: 5,
        min: 0,
        max: 5,
        step: 1,
        slide: function(e, ui) { $('#separationPriorityValue').text(ui.value); controller.updateOptions({separationPriority: ui.value}); }
    });

    $('#alignmentPriority').slider({
        range: 'min',
        value: 2,
        min: 0,
        max: 5,
        step: 1,
        slide: function(e, ui) { $('#alignmentPriorityValue').text(ui.value); controller.updateOptions({alignmentPriority: ui.value}); }
    });

    $('#cohesionPriority').slider({
        range: 'min',
        value: 1,
        min: 0,
        max: 5,
        step: 1,
        slide: function(e, ui) { $('#cohesionPriorityValue').text(ui.value); controller.updateOptions({cohesionPriority: ui.value}); }
    });

    $('#targetPriority').slider({
        range: 'min',
        value: 3,
        min: 0,
        max: 5,
        step: 1,
        slide: function(e, ui) { $('#targetPriorityValue').text(ui.value); controller.updateOptions({targetPriority: ui.value}); }
    });

    $('#visualRange').slider({
        range: 'min',
        value: 50,
        min: 0,
        max: 200,
        step: 25,
        slide: function(e, ui) { $('#visualRangeValue').text(ui.value); controller.updateOptions({visualRange: ui.value}); }
    });
    
    $('#visualField').slider({
        range: 'min',
        value: 270,
        min: 90,
        max: 360,
        step: 90,
        slide: function(e, ui) { $('#visualFieldValue').text(ui.value + '°'); controller.updateOptions({visualField: ui.value}); }
    });
    
    $('#twitter').button();
});
