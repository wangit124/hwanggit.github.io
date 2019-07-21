// Store in firebase
var database = firebase.database();

// Resize project container
$(function () {
    // Check height of window
    if ($(window).width() <= 575) {
        // Set height of project container
        $('#project-container').css('height', $(window).height() - $('#bottomnav').height() - 9 * 12)
    }
    else {
        // Set height of project container
        $('#project-container').css('height', $(window).height() - 9 * 12)
        if ($(window).width() > 840) {
            $('.project-description').css('padding-top', ($('.project-image').height() - $('.project-description').height()) / 2)
        }
        else {
            $('.project-description').css('padding-top', '2em')
        }
    }

    // Set project overlay padding
    $('#project-overlay').css('padding-top', parseInt($('.project-image').height() / 2) - 10)
});

// Resize project container
$(window).resize(function () {
    // Check height of window
    if ($(window).width() <= 575) {
        // Set height of project container
        $('#project-container').css('height', $(window).height() - $('#bottomnav').height() - 9 * 12)
    }
    else {
        // Set height of project container
        $('#project-container').css('height', $(window).height() - 9 * 12)
        if ($(window).width() > 840) {
            $('.project-description').css('padding-top', ($('.project-image').height() - $('.project-description').height()) / 2)
        }
        else {
            $('.project-description').css('padding-top', '2em')
        }
    }
    // Set project overlay padding
    $('#project-overlay').css('padding-top', parseInt($('.project-image').height() / 2) - 10)
});

// Projects page
$('#dropdown-menu ul li').click(function () {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.href = "views/projects.html"
    }
    else {
        location.href = "./projects.html"
    }

    // Get tag
    let currTag = $(this).text().toLowerCase().replace(/\n/g, "").replace(/ /g, "")
    tagData = database.ref("CurrentTag")
    tagData.set(currTag);
});

$('#bottomnav #nav-link-3 svg, #nav-link-3 svg').click(function () {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.href = "views/projects.html"
    }
    else {
        location.href = "./projects.html"
    }

    // Get tag
    let currTag = "all"
    tagData = database.ref("CurrentTag")
    tagData.set(currTag)
});

// Courses page
$('#dropdown-menu-courses ul li').click(function () {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.href = "views/courses.html"
    }
    else {
        location.href = "./courses.html"
    }

    // Get tag
    let currTag = $(this).text().toLowerCase().replace(/\n/g, "").replace(/ /g, "")
    tagData = database.ref("CurrentTag")
    tagData.set(currTag);
});

$('#nav-link-4 svg, #bottomnav #nav-link-4 svg').click(function () {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.href = "views/courses.html"
    }
    else {
        location.href = "./courses.html"
    }
    // Get tag
    let currTag = "all"
    tagData = database.ref("CurrentTag")
    tagData.set(currTag);
});

// Research page
$('#dropdown-menu-research ul li').click(function () {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.href = "views/research.html"
    }
    else {
        location.href = "./research.html"
    }
    // Get tag
    let currTag = $(this).text().toLowerCase().replace(/\n/g, "").replace(/ /g, "")
    tagData = database.ref("CurrentTag")
    tagData.set(currTag);
});

$('#nav-link-5 svg, #bottomnav #nav-link-5 svg').click(function () {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.href = "views/research.html"
    }
    else {
        location.href = "./research.html"
    }
    // Get tag
    let currTag = "all"
    tagData = database.ref("CurrentTag")
    tagData.set(currTag);
});

// About page
$('#nav-link-1 img').click(function () {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.href = "./"
    }
    else {
        location.href = "../"
    }
});

// About page
$('#nav-link-6, #bottomnav #nav-link-6').click(function () {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.href = "./resumes/howard_wang_resume.pdf"
    }
    else {
        location.href = "../resumes/howard_wang_resume.pdf"
    }
});

// Detect changes to current Tag
database.ref("CurrentTag").on("value", function (snap) {
    if ($(document).find('title').first().text() === "Projects") {
        populate('../projects/projects.json', snap.val())
    }
});

// Populate container
function populate(filePath, currentTag) {
    $.getJSON(filePath, function (data) {
        // Go through each item and if it matches tag, display
        for (var i = 0; i < data.length; i++) {
            // If tag matches, make project item and display
            if (data[i].tags.includes(currentTag)) {
                let projectItem = '<div class="project-item"><div class="project-image"><div id="project-overlay"><a href="' + data[i].visit + '" id="visit-btn">VISIT</a><a href="' + data[i].code + '" id="code-btn">CODE</a></div><img src="' + data[i].image_url + '"></div><div class="project-description"><b class="project-title">' + data[i].name + '</b><p>' + data[i].description + '</p></div></div>'
                $('#project-container').append(projectItem)
            }
        }
    });
}