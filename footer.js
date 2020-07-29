//LOAD FOOTER
$(document).ready( () => {
    $("footer").load("footer.html", () => {
        //SCROLL UP
        $("footer .fa-chevron-up").click( () => {

            $("html").animate({
                scrollTop: 0
            }, 800);
        });
    });
});