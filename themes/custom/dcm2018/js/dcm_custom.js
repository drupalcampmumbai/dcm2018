jQuery(document).ready(function($){
	/*Navigation menu on hover*/
    // $(".dropdown").hover(            
    // function() {
    //     $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
    //     $(this).toggleClass('open');
    //     $('span', this).toggleClass("caret caret-up");                
    // },
    // function() {
    //     $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
    //     $(this).toggleClass('open');
    //     $('span', this).toggleClass("caret caret-up");                
    // });
    /*End Navigation menu on hover*/

    $('#navbar .navbar-toggle').on('click', function (e) {
        $('.navbar-header').toggleClass('menu-open');
    });

    /*Propose session get heighest session height and apply to all session block*/
    var h1;
    $(".view-sponsors .views-field-body").each(function(){
        h1 = $(this).outerHeight(true);
        $(this).siblings('.views-field-field-sponsor-logo').height(h1);
    });
    
    /*End Propose session get heighest session height and apply to all session block*/

    /*Sponcers page odd/even class*/
    $('.path-sponsors .view-sponsors .view-content .views-row:odd').addClass('odd');
    $('.path-sponsors .view-sponsors .view-content .views-row:even').addClass('even');
    /*End Sponcers page odd/even class*/

    /*For screen size*/
    if ($(window).width() < 960) {
    } else {
    }
    /*End For screen size*/
});