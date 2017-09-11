$(window).on('resize', function() {
    if($(window).width() < 1100) {
        $('#main-navbar').addClass('responsive');
    }
    else{
        $('#main-navbar').removeClass('responsive');
    }
});
function mobilenav(){

    var x = document.getElementById("navbar-menu");
    if (x.className === "navbar-dropdown") {
        x.className += " mobile-navbar";
    } else {
        x.className = "navbar-dropdown";
    }
}