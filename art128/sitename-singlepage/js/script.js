document.addEventListener('DOMContentLoaded', function() {
    //TOGGLE MENU NAV 
    var menubutton = document.querySelectorAll(".menu-button");
    var i;
    for (i = 0; i < menubutton.length; i++) {
        menubutton[i].onclick = function () {
            this.classList.toggle("expanded");
        };
    }

     //STICKY  NAV SCROLL LINKS FOR SINGLE PAGE SITES 
     var stickynavlinks = document.querySelectorAll(".sticky nav a");
     var j;
     for (i = 0; j < stickynavlinks.length; j++) {
        stickynavlinks[j].onclick = function () {       
    var stickymenu = document.querySelectorAll(".sticky .menu-button");
    var k;
    for (k = 0; i < stickymenu.length; k++) {
        stickymenu[k].remove("expanded");
        };
    }
 };
    
});
