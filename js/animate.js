// Create new timeline
var tl = new TimelineMax();

// Check if animation finished
var animationDone = true;

// Dynamically resize globe
$(document).ready(function () {
    if ($(window).width() <= 575) {
        $('#globe-animate').css('height', $(window).height() - $('#topnav').height() * 2)
        $('#globe-animate').css('padding-top', $('#topnav').height())
        $('#globe-animate svg').css('margin-top', $(window).height() * 0.6)
        $('#cloud-header-2').css('top', $(window).height() * 0.25)
        $('#cloud-header-2').css('left', '72%')
        $('#cloud-header-3').css('top', $(window).height() * 0.30)
        $('#cloud-header-3').css('left', '68%')
        $('#cloud-header').css('top', $(window).height() * 0.20)
        $('#cloud-header').css('left', '35%')
    }
    else {
        $('#globe-animate').css('height', $(window).height() - $('#topnav').height())
        $('#globe-animate').css('padding-top', $('#topnav').height())
        $('#globe-animate svg').css('margin-top', $(window).height() * 0.6)
        $('#cloud-header-2').css('top', $(window).height() * 0.25)
        $('#cloud-header-2').css('left', '50%')
        $('#cloud-header-3').css('top', $(window).height() * 0.28)
        $('#cloud-header-3').css('left', '70%')
        $('#cloud-header').css('top', $(window).height() * 0.16)
        $('#cloud-header').css('left', '28%')
    }

    // Resize dialog
    resizeDialogue("none")

    // Create a intro message and toggle 
    var message = "Hi, I'm Howard! <br> Click me to see my story!"

    // After a few seconds, display click me
    var messageRepeat = setInterval(function () {
        // Resize dialogue then toggle between messages
        resizeDialogue(message)
    }, 2500)

    // On click, stop toggle
    $('#sprout-animate').click(function () {
        clearInterval(messageRepeat)
    });
});

$(window).resize(function () {
    if ($(window).width() <= 575) {
        $('#globe-animate').css('height', $(window).height() - $('#topnav').height() * 2)
        $('#globe-animate').css('padding-top', $('#topnav').height())
        $('#globe-animate svg').css('margin-top', $(window).height() * 0.6)
        $('#cloud-header-2').css('top', $(window).height() * 0.25)
        $('#cloud-header-2').css('left', '72%')
        $('#cloud-header-3').css('top', $(window).height() * 0.30)
        $('#cloud-header-3').css('left', '68%')
        $('#cloud-header').css('top', $(window).height() * 0.20)
        $('#cloud-header').css('left', '35%')
    }
    else {
        $('#globe-animate').css('height', $(window).height() - $('#topnav').height())
        $('#globe-animate').css('padding-top', $('#topnav').height())
        $('#globe-animate svg').css('margin-top', $(window).height() * 0.6)
        $('#cloud-header-2').css('top', $(window).height() * 0.25)
        $('#cloud-header-2').css('left', '50%')
        $('#cloud-header-3').css('top', $(window).height() * 0.28)
        $('#cloud-header-3').css('left', '70%')
        $('#cloud-header').css('top', $(window).height() * 0.16)
        $('#cloud-header').css('left', '28%')
    }
    $('#sprout-animate').css('margin-top', parseInt($('#globe-animate svg').css('margin-top')) - parseInt($('#sprout-animate').height()))
});

// Animate clouds
$(function () {
    // Repeatedly move cloud left and right
    moveLeftandRight("cloud-header-3", 65, 70, 15000)
    window.setInterval(function () {
        moveLeftandRight("cloud-header-3", 65, 70, 15000)
    }, 30000);

    // Repeatedly move cloud left and right
    moveLeftandRight("cloud-header-2", 55, 45, 8000)
    window.setInterval(function () {
        moveLeftandRight("cloud-header-2", 55, 45, 8000)
    }, 16000);

    // Repeatedly move cloud left and right
    moveLeftandRight("cloud-header", 40, 30, 10000)
    window.setInterval(function () {
        moveLeftandRight("cloud-header", 40, 30, 10000)
    }, 20000);
});

// The story, sequential animations
$('#sprout-animate').click(function () {
    // toggle switch
    if (animationDone === true) {
        animationDone = false;

        // Change background
        generateBackground('images/animations/pagoda.png')

        // Hide dialog box
        $('#dialog-box, #bottom-triangle').css('visibility', 'hidden')

        // Part 1: Where I was born
        setTimeout(function () {
            $('#dialog-box, #bottom-triangle').css('visibility', 'visible')
            resizeDialogue("I was born in the rural <br> province of Gansu, China")
        }, 2000);

        setTimeout(function () {
            resizeDialogue("My parents were farmers. <br> We lived poor, but free")
        }, 4500);

        // Part 2: Moving to Nanjing 
        setTimeout(function () {
            $('#dialog-box, #bottom-triangle').css('visibility', 'hidden')
            clearBackground()
            startWalk(20)
            earthSpin(-90, -115, 2000)
        }, 7500);

        setTimeout(function () {
            generateBackground('images/animations/skyscrapers.png')
        }, 9500);

        setTimeout(function () {
            $('#dialog-box, #bottom-triangle').css('visibility', 'visible')
            resizeDialogue("At age 4, I had my first taste <br> of city life when we moved to <br> the former capital, Nanjing")
        }, 11500);

        setTimeout(function () {
            clearBackground()
            resizeDialogue("A year later, our lives took a <br> drastic turn. We emigrated <br> to Canada")
        }, 15000);

        // Part 3: Emigration to Canada
        setTimeout(function () {
            $('#dialog-box, #bottom-triangle').css('visibility', 'hidden')
            startWalk(29)
            earthSpin(-115, -300, 3000)
        }, 18000);

        setTimeout(function () {
            generateBackground('images/animations/cn-tower.png')
        }, 21000);

        setTimeout(function () {
            $('#dialog-box, #bottom-triangle').css('visibility', 'visible')
            resizeDialogue("Our lives were not ideal. <br> We were treated unequally <br> due to our poor English")
        }, 22500);

        // Part 4: Attending school, IB
        setTimeout(function () {
            clearBackground()
            $('#dialog-box, #bottom-triangle').css('visibility', 'hidden')
        }, 25500);

        setTimeout(function () {
            generateBackground('images/animations/school.png')
        }, 26300);

        setTimeout(function () {
            $('#dialog-box, #bottom-triangle').css('visibility', 'visible')
            resizeDialogue("But we never gave up. I <br> enrolled in gifted education, <br> finishing with an IB diploma")
        }, 27800);

        // Part 5: To the US
        setTimeout(function () {
            clearBackground()
            $('#dialog-box, #bottom-triangle').css('visibility', 'hidden')
            startWalk(20)
            earthSpin(-300, -330, 2000)
        }, 31000);

        setTimeout(function () {
            generateBackground('images/animations/california.png')
        }, 33000);

        setTimeout(function () {
            $('#dialog-box, #bottom-triangle').css('visibility', 'visible')
            resizeDialogue("That was two years ago. <br> Despite our struggle, my <br> family made it to the US")
        }, 34500);

        setTimeout(function () {
            clearBackground()
            $('#dialog-box, #bottom-triangle').css('visibility', 'hidden')
        }, 38000);

        // Part 6: Attending UCSD
        setTimeout(function () {
            generateBackground('images/animations/college.png')
        }, 39000);

        setTimeout(function () {
            $('#dialog-box, #bottom-triangle').css('visibility', 'visible')
            resizeDialogue("Now, I am pursuing a <br> B.S. in Computer Science <br> at UC San Diego")
        }, 40500);

        setTimeout(function () {
            clearBackground()
            $('#dialog-box, #bottom-triangle').css('visibility', 'hidden')
        }, 43500);

        setTimeout(function () {
            $('#dialog-box, #bottom-triangle').css('visibility', 'visible')
            resizeDialogue("My goal is to become a <br> software engineer in the <br> future and impact the world!")
        }, 44500);

        setTimeout(function () {
            $('#dialog-box, #bottom-triangle').css('visibility', 'hidden')
            startWalk(29)
            earthSpin(-330, -450, 3000)
        }, 47500);

        setTimeout(function () {
            $('#dialog-box, #bottom-triangle').css('visibility', 'visible')
            resizeDialogue("Hi, I'm Howard! <br> Click me to see my story!")
            
            // Create a intro message and toggle 
            var message = "Hi, I'm Howard! <br> Click me to see my story!"

            // After a few seconds, display click me
            var messageRepeat = setInterval(function () {
                // Resize dialogue then toggle between messages
                resizeDialogue(message)
            }, 2500)

            // On click, stop toggle
            $('#sprout-animate').click(function () {
                clearInterval(messageRepeat)
            });

            animationDone = true
        }, 50500);
    }
});


// Animate walking cycle
function startWalk(duration) {
    var cycles = new Array();

    // Add 8 cycles
    for (var i = 1; i < 9; i++) {
        cycles[i] = 'images/Walk cycle/cycle' + i + '.png'
    }

    //start with id=0
    var currId = 0;
    var counter = 0;

    var animate = window.setInterval(function () {
        // Switch image
        $('#sprout-animate img').attr('src', cycles[currId])

        // Increment counter
        currId++
        counter++

        // Once counter reaches threshold, stop
        if (counter === duration) clearInterval(animate)

        // Reset currId
        if (currId === 9) {
            currId = 0;
        }
    }, 100);
}

// Function move left and right
function moveLeftandRight(id, start, end, duration) {
    $("#" + id).animate({
        left: start + '%',
    }, duration, function () {
    });
    $("#" + id).animate({
        left: end + '%',
    }, duration, function () {
    });
}

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

// Function to resize dialogue box
function resizeDialogue(message) {
    // If message is empty, don't change message
    if (message !== "none") {
        $('#monologue').html(message)
    }
    else {
        $('#monologue').html("Hi, I'm Howard! <br> Click me to see my story!")
    }

    // Set dialog box height and width to be same as text
    $('#dialog-box').css('height', $('#dialog-box p').height() * 1.5)
    $('#dialog-box').css('width', $('#dialog-box p').width() * 1.2)
    $('#dialog-box p').css('padding-top', $('#dialog-box p').height() * 0.25)

    // Set top margin of sprout animation
    $('#sprout-animate').css('margin-top', parseInt($('#globe-animate svg').css('margin-top')) - parseInt($('#sprout-animate').height()))
    tl.from('#dialog-box, #bottom-triangle', 0.5, { scaleY: 0, transformOrigin: "bottom", ease: Back.easeOut })
}

// Create a function to popup a background image to sprout
function generateBackground(image) {
    $('#sprout-animate').css({
        "background-size": "130px 130px", "background-image": "url('" + image + "')", "animation-name": "popin",
        "animation-duration": "1.5s"
    });
}

// Create a function to clear a background image
function clearBackground() {
    $('#sprout-animate').css({
        "background-size": "130px 0px", "animation-name": "popout",
        "animation-duration": "0.8s"
    });
}

// Function to move earth
function earthSpin(start, end, duration) {
    $('#globe-animate svg').animateRotate(end, { duration: duration }, start)
}