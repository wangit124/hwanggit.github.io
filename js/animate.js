// Dynamically resize globe
$(document).ready(function () {
    if ($(window).width() <= 575) {
        $('#globe-animate').css('height', $(window).height() - $('#topnav').height() * 2)
        $('#globe-animate').css('padding-top', $('#topnav').height())
        $('#globe-animate svg').css('margin-top', $(window).height() * 0.6)
    }
    else {
        $('#globe-animate').css('height', $(document).height() - $('#topnav').height())
        $('#globe-animate').css('padding-top', $('#topnav').height())
        $('#globe-animate svg').css('margin-top', $(window).height() * 0.5)
    }

    // Set top margin of sprout animation
    $('#sprout-animate').css('margin-top', parseInt($('#globe-animate svg').css('margin-top')) - parseInt($('#sprout-animate').height()))
});

$(window).resize(function () {
    if ($(window).width() <= 575) {
        $('#globe-animate').css('height', $(window).height() - $('#topnav').height() * 2)
        $('#globe-animate').css('padding-top', $('#topnav').height())
        $('#globe-animate svg').css('margin-top', $(window).height() * 0.6)
    }
    else {
        $('#globe-animate').css('height', $(document).height() - $('#topnav').height())
        $('#globe-animate').css('padding-top', $('#topnav').height())
        $('#globe-animate svg').css('margin-top', $(window).height() * 0.5)
    }
    $('#sprout-animate').css('margin-top', parseInt($('#globe-animate svg').css('margin-top')) - parseInt($('#sprout-animate').height()))
});

// Animate walking cycle
$(function(){
    var cycles=new Array();

    // Add 8 cycles
    for (var i=1; i<9; i++) {
        cycles[i] = 'images/Walk cycle/cycle' + i + '.png'
    }

    //start with id=0
    var currId = 0;
    var counter = 0;
    
    var duration = window.setInterval(function(){
        // Switch image
        $('#sprout-animate img').attr('src', cycles[currId])

        // Increment counter
        currId++
        counter++
        
        // Once counter reaches threshold, stop
        if (counter === 56) clearInterval(duration)

        // Reset currId
        if (currId === 9) {
            currId = 0;
        }
    }, 100);   

});

// Rotation Animation plugin (cross-browser)
$.fn.animateRotate = function (endAngle, options, startAngle) {
    return this.each(function () {
        var elem = $(this), rad, costheta, sintheta, matrixValues, noTransform = !('transform' in this.style || 'webkitTransform' in this.style || 'msTransform' in this.style || 'mozTransform' in this.style || 'oTransform' in this.style),
            anims = {}, animsEnd = {};
        if (typeof options !== 'object') {
            options = {};
        }
        else if (typeof options.extra === 'object') {
            anims = options.extra;
            animsEnd = options.extra;
        }
        anims.deg = startAngle;
        animsEnd.deg = endAngle;
        options.step = function (now, fx) {
            if (fx.prop === 'deg') {
                if (noTransform) {
                    rad = now * (Math.PI * 2 / 360);
                    costheta = Math.cos(rad);
                    sintheta = Math.sin(rad);
                    matrixValues = 'M11=' + costheta + ', M12=-' + sintheta + ', M21=' + sintheta + ', M22=' + costheta;
                    $('body').append('Test ' + matrixValues + '<br />');
                    elem.css({
                        'filter': 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\',' + matrixValues + ')',
                        '-ms-filter': 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\',' + matrixValues + ')'
                    });
                }
                else {
                    elem.css({
                        webkitTransform: 'rotate(' + now + 'deg)',
                        mozTransform: 'rotate(' + now + 'deg)',
                        msTransform: 'rotate(' + now + 'deg)',
                        oTransform: 'rotate(' + now + 'deg)',
                        transform: 'rotate(' + now + 'deg)'
                    });
                }
            }
        };
        if (startAngle) {
            $(anims).animate(animsEnd, options);
        }
        else {
            elem.animate(animsEnd, options);
        }
    });
};

// Rotate globe from -90 to 40 degrees
$('#globe-animate svg').animateRotate(90, {duration: 0, 
    complete: function() { 
        $('#globe-animate svg').animateRotate(60, {duration: 5700, 
            complete: function() { 
                
            }
        });        
    }
});

