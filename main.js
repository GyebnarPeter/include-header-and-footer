//COVER ANIMATION
let firstWelcomeText = document.querySelector(".main-cover h1");
let secondWelcomeText = document.querySelector(".main-cover h4");
let coverLine = document.querySelector(".cover-text-underline");
let coverButton = document.querySelector(".main-cover button");

let coverAnimation = () => {

    setTimeout( () => {
        coverLine.style.opacity = 1;
    }, 1000)

    setTimeout( () => {
        firstWelcomeText.style.opacity = 1;
    }, 2000)

    setTimeout( () => {
        secondWelcomeText.style.opacity = 1;
    }, 3000)

    setTimeout( () => {
        coverButton.style.opacity = 1;
    }, 4000)
}
coverAnimation();


//COVER NAVIGATION
$(".main-cover i").click( () => {
    let ourStoryPosition = $(".our-story").offset().top;

    $("html").animate({
        scrollTop: ourStoryPosition
    }, 800);
});


//MAIN ANIMATIONS
window.addEventListener('scroll', () => {
    
    //RECIPE PART ANIMATION
    let recipesPosition = document.querySelector(".recipes").offsetTop;
    let recipesFirstHead = document.querySelector(".recipes h1");
    let recipesSecondHead = document.querySelector(".recipes h2");

    if (document.documentElement.scrollTop > recipesPosition-300) {
        recipesFirstHead.style.opacity = 1;
        setTimeout(() => {
            recipesSecondHead.style.opacity = 1;
        }, 1000);
    }

    //BLEND PART ANIMATION
    let blendPosition = document.querySelector(".blend").offsetTop;
    let blendFirstHead = document.querySelector(".blend h1");
    let blendSecondHead = document.querySelector(".blend h2");

    if (document.documentElement.scrollTop > blendPosition-300) {
        blendFirstHead.style.opacity = 1;
        setTimeout(() => {
            blendSecondHead.style.opacity = 1;
        }, 1000);
    }
});