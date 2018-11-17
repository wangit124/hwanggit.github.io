//SIDE NAV//
function openSideMenu() {
	document.getElementById('side-menu').style.width='250px';
	//document.getElementById('main').style.marginLeft='250px';
}

function closeSideMenu() {
	document.getElementById('side-menu').style.width='0';
	//document.getElementById('main').style.marginLeft='0';
}

//CAROUSEL

//Helper function(s)
function degToRad(input) { return input*(Math.PI/100);}

function out(arg){ document.getElementById("debug").innerHTML=arg;}
var Carousel = function (){
	//definitions and init
	var me=this;

	var carouselW = 600;
	var carouselH = 300;
	var itemW = 100;
	var itemH = 200;
	var noOfItemsToAdd = 3;

	//Working variables
	var carousel =document.getElementById("rotating-carousel");
	var itemContainer=carousel.getElementByClassName("item-container");
	var items=[];
	var deg=0;
	var rangeX=carouselW;

	//simulate constructor from other languages
	init();

	function init() {
	    for (var i=0;i<noOfItemsToAdd;i++) {
		addItem();
	    }

	    animate();
	}
	
	//To add each slide
	function addItem() {
	    
	    var item=document.createElement("div");
	    item.classList.add("item");
	    carousel.appendChild(item);

	    var itemObject = {
		item:item
	    };
	}
	    

	function animate() {
	    deg+=0.01;
	    var sin = Math.sin(degToRad(deg)*rangeX);
	    requestAnimationFrame(animate);
	}

//implement draggable side nav
//implement hover slide for personal slider

//PERSONAL SLIDE
var slider={
	
	//define slide variables
	el: {
	    slider: $("#slider"),
	    allSlides: $(".slide")
	},

	//initial function, scroll slider
	init: function() {
	    this.el.slider.on("scroll",function(event) {
		slider.moveSlidePosition(event);
	    });
	},

	//helper function for scroll
	moveSlidePosition: function(event) {
	     this.el.allSlides.css({
		"background-position": $(event.target).scrollLeft()/6-100+ "px 0"
	     });
	}
};

//initialize 
slider.init();


