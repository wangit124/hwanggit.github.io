// Projects page
$('#nav-link-3, #dropdown-menu ul li').first().click(function() {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.href = "views/projects.html"
    }
    else {
        location.href = "./projects.html"
    }
});

// Projects page
$('#nav-link-4, #dropdown-menu-courses ul li').first().click(function() {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.href = "views/courses.html"
    }
    else {
        location.href = "./courses.html"
    }
});

// Projects page
$('#nav-link-5, #dropdown-menu-research ul li').first().click(function() {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.href = "views/research.html"
    }
    else {
        location.href = "./research.html"
    }
});

// About page
$('#nav-link-1').click(function() {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.href = "./index.html"
    }
    else {
        location.href = "../index.html"
    }
});

// About page
$('#nav-link-6').click(function() {
    if ($(document).find('title').first().text() === "Howard Wang") {
        location.href = "./resumes/howard_wang_resume.pdf"
    }
    else {
        location.href = "../resumes/howard_wang_resume.pdf"
    }
});