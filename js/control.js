// Projects page
$('#nav-link-3, #dropdown-menu ul li').first().click(function() {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.replace("views/projects.html")
    }
    else {
        location.replace("./projects.html")
    }
});

// Projects page
$('#nav-link-4, #dropdown-menu-courses ul li').first().click(function() {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.replace("views/courses.html")
    }
    else {
        location.replace("./courses.html")
    }
});

// Projects page
$('#nav-link-5, #dropdown-menu-research ul li').first().click(function() {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.replace("views/research.html")
    }
    else {
        location.replace("./research.html")
    }
});

// About page
$('#nav-link-1').click(function() {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.replace("./index.html")
    }
    else {
        location.replace("../index.html")
    }
});

// About page
$('#nav-link-6').click(function() {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.replace("./resumes/howard_wang_resume.pdf")
    }
    else {
        location.replace("../resumes/howard_wang_resume.pdf")
    }
});