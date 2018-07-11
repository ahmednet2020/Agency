/*global $, alert, document, window, console */
$(document).ready(function() {
    "use strict";
    //$(".header").find(".overlay").css("height", $(window).height());
    if ($(window).width() >= 768) {
        $(".navbar").hover(function() {
            $('.dropmanu').slideDown(500);
        }, function() {
            $('.dropmanu').slideUp(500);
        });
    } else {
        $(".dropmanulink").on("click", function() {
            $(this).next(".dropmanu").slideToggle('500');
        });
    }
    $(".togglebtn").on("click", function() {
        $(".navbar").toggle();
    });
});