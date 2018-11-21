//SIDE NAV//
function openSideMenu() {
	document.getElementById('side-menu').style.width='250px';
	//document.getElementById('main').style.marginLeft='250px';
}

function closeSideMenu() {
	document.getElementById('side-menu').style.width='0';
	//document.getElementById('main').style.marginLeft='0';
}
function out(arg){ document.getElementById("debug").innerHTML=arg;}

//CAROUSEL
/*var Carousel = function (){
	//definitions and init
	var me=this;

	var carouselW = 600;
	var carouselH = 300;
	var itemW = 100;
	var itemH = 200;
	var noOfItemsToAdd = 1;

	//Working variables
	var carousel =document.getElementById("rotating-carousel");
	var itemContainer=carousel.getElementByClassName("item-container")[0];
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
	    itemContainer.appendChild(item);

	    var itemObject = {
		carouselItem:item
	    };

	    items.push(itemObject);
	}
	    

	function animate() {
	    deg+=0.01;
	    var sin = 0.5+ (Math.sin(deg)*0.5);
	    out(sin);

	    for (var i=0;i<items.length;i++) {
		var itemObject=items[i];
		var posX=sin*rangeX;
		itemObject.carouselItem.style.left=postX="px";
	    }

	    window.requestAnimationFrame(animate);
	}
}
//Helper function(s)
function degToRad(input) { return input*(Math.PI/100);}
*/

/*$(function() {


   var defaultCss = {
	width: 240,
	height: 150,
	marginTop: 50,
	marginRight: 25,
	marginLeft: 25,
	opacity: 0.5
   };	

   var selectedCss = {
	width: 400,
	height: 260,
	marginTop: 0,
	marginRight: -25,
	marginLeft: -25,
	opacity: 1
   };

   var aniOpts = {
	queue: false,
	duration: 1000,
	easing: 'elastic'
   };

   var $car = $('#carousel');

   for (var a = 0; a<3; a++) {
	$car.prepend('<div/>');
   }
    
   for (var a = 0; a<3;a++) {
	$car.append('<div/>');
   }
   $car.find('img').css('zIndex', 1).css(defaultCss);
   $car.find('img').eq(0).css('zIndex',2).css(selectedCss);
   $car.carouFredSel({
	circular:false,
	infinite:false,
	width:'100%', 
	height: 250, 
	items: 7, 
	prev: '#prev', 
	next: '#next', 
	auto: false,
	scroll: {
		items: 1,
		duration: 1000,
		easing: 'elastic',
		onBefore: function(data) {
			data.items.old.eq(3).find('img').css('zIndex', 1).animate(defaultCss,aniOpts);
			data.items.visible.eq(3).find('img').css('zIndex', 2).animate(selectedCss, aniOpts);
		}
	}
   });
});
*/
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
}

slider.init();

//initialize 
/*function pageLoadInit(){
var myCarousel= new Carousel();
}
*/
