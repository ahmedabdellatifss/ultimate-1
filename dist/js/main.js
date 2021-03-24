$(function(){
    'use strict';
    $('.toggle-sidebar').on("click" , function (){
        $('.content-area, .sidebar').toggleClass("no-sidebar");
    });
    // Toggle submenu
    $('.toggle-submenu').on("click" , function () {
        $(this).find('.fa-angle-right').toggleClass('down');
        $(this)
            .next(".child-links")
            .slideToggle();
    });
    // Open / Close Full screen
    $('.toggle-fullscreen').on("click" , function (){
         $(this).toggleClass("full-screen");

         if ($(this).hasClass('full-screen')){ // page is now full screen
            openFullscreen(); 
            
         }else{// page is not full screen
            closeFullscreen(); 
         }
    });
});

var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  } 
const map = new Map();
const mySet = new Set();