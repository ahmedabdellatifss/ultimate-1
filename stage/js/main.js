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
    // Tiggle settings
    $('.toggle-settings').on('click', function (){
      $(this).find('i').toggleClass('fa-spin');
      $(this).parent().toggleClass('hide-settings');
    });

    // Switch Colors Theme
    var themesClasses= [];
    $('.color-options li').each(function () {
     themesClasses.push($(this).data('theme'));
    });

    $('.color-options li').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
      $("body").removeClass(themesClasses.join(" "))
      .addClass($(this).data("theme"));
    });

    // Switch Fonts Options
    var fontclasses =[];
    $('.font-options select option').each(function (){
      fontclasses.push($(this).val());
    });

    $('.font-options select').on("change", function(){
      $("body").removeClass(fontclasses.join(" ")).addClass($(this).find("option:selected").val());
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