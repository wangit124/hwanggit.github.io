   function openSideMenu() {
      document.getElementById('side-menu').style.width='250px';
   }
    
   function closeSideMenu() {
      document.getElementById('side-menu').style.width='0';
   }
    
   const slider= document.querySelector('.slider');
      let isDown=false;
      let startX;
      let scrollLeft;

   slider.addEventListener('mousedown', (e) => {
     isDown=true;
     slider.classList.add('active');
     startX = e.pageX - slider.offsetLeft;
     scrollLeft = slider.scrollLeft;
   });

   slider.addEventListener('mouseleave', () => {
     isDown=false;
     slider.classList.remove('active');
   });

   slider.addEventListener('mouseup', () => {
     isDown=false;
     slider.classList.remove('active');
   });

   slider.addEventListener('mousemove', (e) => {
     if(!idDown) return; 
     e.preventDefault();
     const x = e.pageX - slider.offsetLeft;
     const walk= (x - startX)*3;
     slider.scrollLeft= scrollLeft - walk;
   }); 
  
