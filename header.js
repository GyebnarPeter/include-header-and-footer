//LOAD HEADER
$(document).ready(function(){
    $("header").load("header.html", () => {

        //NAV NAVIGATION
        $("nav a").click( function(event) {
            event.preventDefault();
        
            let id = $(this).attr("href");
            let target = $(id).offset().top - 50;
        
            $("html").animate({
                scrollTop: target
            }, 800);
        
            if ($(window).innerWidth() < 900){
                $(".header-wrap").slideToggle();
            }
        
            navIcon.classList.contains("nav-icon-rotate")
                ? navIcon.classList.remove("nav-icon-rotate")
                : navIcon.classList.add("nav-icon-rotate")
        });

        // TOGGLE NAV
        let navIcon = document.querySelector(".nav-icon");
        let header = document.querySelector(".header-wrap");

        $(".nav-icon").click(() => {
            $(header).slideToggle();

            header.style.backgroundColor = "black";

            navIcon.classList.contains("nav-icon-rotate")
                ? navIcon.classList.remove("nav-icon-rotate")
                : navIcon.classList.add("nav-icon-rotate")
        });

        //NAVIGATION SCROLL
        window.onscroll = () => {
    
            let navi = document.querySelectorAll("nav a");
        
            if (document.documentElement.scrollTop > 100) {
        
                header.classList.add("header-background");
                header.style.color = "black";
        
                for (let i = 0; i < navi.length; ++i) {
                    navi[i].style.color = "black";
                }
                
            } else {
            
                header.style.color = "white";
                header.classList.remove("header-background");
        
                for (let i = 0; i < navi.length; ++i) {
                    navi[i].style.color = "white";
                }
            }
        }

        //LOGO SCROLL UP
        $(".header-logo").click( () => {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });
    });
});