// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyD8kAeufsWRupHrkwt-7fPlINxwFyzo2EY",
	authDomain: "hwang-96e16.firebaseapp.com",
	databaseURL: "https://hwang-96e16.firebaseio.com",
	projectId: "hwang-96e16",
	storageBucket: "hwang-96e16.appspot.com",
	messagingSenderId: "44659348911",
	appId: "1:44659348911:web:5008629a58d15a90"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// When document loaded, increment view count
$(document).ready(function () {

	// Get the title of the page
	let title = $(this).find('title').first().text();

	// Get firebase database
	var database = firebase.database().ref(title + '/views');
	var resume = firebase.database().ref('Resume/clicks')

	// Set views for current page
	database.transaction(function (currViews) {
		// If title/views has never been set, value will be `null`.
		return (currViews || 0) + 1;
	});

	// snap the views and click values
	resume.on('value', function (snap) {
		// Set current clicks
		let clicks = $('#resume-clicks p').text()
		let text = clicks.replace(/\d+/g, '')
		$('#resume-clicks p').html(text + snap.val())
	});

	// snap the views and click values
	database.on('value', function (snap) {
		// Set current Views
		let views = $('#user-views p').text()
		let text = views.replace(/\d+/g, '')
		$('#user-views p').html(text + snap.val())
	});
});

// If resume link is clicked, update clickcount
$('#nav-link-6, #bottomnav #nav-link-6').click(function () {
	// Get firebase database
	var database = firebase.database().ref('Resume' + '/clicks');

	// Set clicks for resume
	database.transaction(function (currClicks) {
		// If resume/clicks has never been set, value will be `null`.
		return (currClicks || 0) + 1;
	});
});

// On hover stats link generates profile menu
$('#profile-image').mouseenter(function () {
	$('#profile-menu').show()

	// set left position of dropdown menu to offset left
	$('#profile-menu').css('left', parseInt($(this).css('margin-left')) - $(this).width() / 3 - 6.5)
	$('#profile-menu').css('width', 330)
	$('#profile-menu').css('height', 200)
});

// Change back to white when mouse leaves
$('#nav-link-1').mouseleave(function () {
	$('#profile-menu').hide()
});

// On hover stats link generates dropdown stats
$('#nav-link-2').mouseenter(function () {
	$('#stats-menu').show()

	// Get offset left of navlink image
	var offsetLeft = parseInt($('#nav-link-2 svg').css('margin-left')) + $(this).width() + $('#nav-link-2 svg').width() / 2

	// set left position of dropdown menu to offset left
	$('#stats-menu').css('left', offsetLeft - $('#stats-menu').width() / 2 + 4)
	$('#stats-menu').css('width', $('#nav-link-2 svg').width() * 4.7)
});

// Change back to white when mouse leaves
$('#nav-link-2').mouseleave(function () {
	$('#stats-menu').hide()
});

// On hover stats link generates dropdown menu
$('#nav-link-3').mouseenter(function () {
	// if height/width is less than a certain threshold, then don't show
	let heightLimit = $('#topnav').height() + $('#nav-link-4 svg').width() * 36 / 5
	if ($(window).height() <= heightLimit) {
		return
	}

	$('#dropdown-menu').show()

	// Get left offset of third nav link
	var offset = $(this).width() * 2 + parseInt($('#nav-link-3 svg').css('margin-left')) + $('#nav-link-3 svg').width() / 2

	// Set parameters of nav link
	$('#dropdown-menu').css('left', offset - $('#nav-link-3 svg').width() * 2 + 4)
	$('#dropdown-menu').css('width', $('#nav-link-3 svg').width() * 4)
	$('#dropdown-menu').css('height', $('#nav-link-3 svg').width() * 6)
});

// Change back to white when mouse leaves
$('#nav-link-3').mouseleave(function () {
	$('#dropdown-menu').hide()
});

// On hover stats link generates dropdown menu
$('#nav-link-4').mouseenter(function () {
	// if height/width is less than a certain threshold, then don't show
	let heightLimit = $('#topnav').height() + $('#nav-link-4 svg').width() * 36 / 5
	if ($(window).height() <= heightLimit) {
		return
	}

	$('#dropdown-menu-courses').show()

	// Get left offset of third nav link
	var offset = $(this).width() * 3 + parseInt($('#nav-link-4 svg').css('margin-left')) + $('#nav-link-4 svg').width() / 2

	// Set parameters of nav link
	$('#dropdown-menu-courses').css('left', offset - $('#nav-link-4 svg').width() * 2.75 + 4)
	$('#dropdown-menu-courses').css('width', $('#nav-link-4 svg').width() * 5.5)
	$('#dropdown-menu-courses').css('height', $('#nav-link-4 svg').width() * 36 / 5)
});

// Change back to white when mouse leaves
$('#nav-link-4').mouseleave(function () {
	$('#dropdown-menu-courses').hide()
});

// On hover stats link generates dropdown menu
$('#nav-link-5').mouseenter(function () {
	// if height/width is less than a certain threshold, then don't show
	let heightLimit = $('#topnav').height() + $('#nav-link-4 svg').width() * 36 / 5
	if ($(window).height() <= heightLimit) {
		return
	}
	
	$('#dropdown-menu-research').show()

	// Get left offset of third nav link
	var offset = $(this).width() * 4 + parseInt($('#nav-link-5 svg').css('margin-left')) + $('#nav-link-5 svg').width() / 2

	// Set parameters of nav link
	$('#dropdown-menu-research').css('left', offset - $('#nav-link-5 svg').width() * 2.4 + 4)
	$('#dropdown-menu-research').css('width', $('#nav-link-5 svg').width() * 4.8)
	$('#dropdown-menu-research').css('height', $('#nav-link-5 svg').width() * 6)
});

// Change back to white when mouse leaves
$('#nav-link-5').mouseleave(function () {
	$('#dropdown-menu-research').hide()
});

// Hover on menu item
$('#dropdown-menu ul li, #dropdown-menu-courses ul li, #dropdown-menu-research ul li').mouseenter(function () {
	$(this).css('background-color', '#8FD4FE')
	$(this).css('color', 'black')
});

$('#dropdown-menu ul li, #dropdown-menu-courses ul li, #dropdown-menu-research ul li').mouseleave(function () {
	$(this).css('background-color', 'white')
	$(this).css('color', 'black')
});

// On hover change to black
$('#topnav li, #bottomnav li').mouseenter(function () {
	$(this).find("path, rect").css("fill", "black")
	$(this).find("a").css("color", "black")
});

// Change back to white when mouse leaves
$('#topnav li, #bottomnav li').mouseleave(function () {
	$(this).find("path, rect").css("fill", "white")
	$(this).find("a").css("color", "white")
});

// Click events
$('.social-link').click(function() {
	// Get type
	let type = $(this).attr('type')
	
	// Direct to respective sites
	if (type==='github') {
		window.location.replace('https://www.github.com/hwanggit')
	}
	else if (type==='linkedin') {
		window.location.replace('https://www.linkedin.com/in/hwangprof')
	}
	else {
		window.location.replace('https://www.facebook.com/howard.wang.509')
	}
});