$(document).ready(function () {

    // Click a question to show or hide its answer.
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });

    // Change question color when hovered.
    $(".question").hover(
        function () {
            $(this).css("color", "blue");
        },
        function () {
            $(this).css("color", "black");
        }
    );

    // Double-click to close all answers.
    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });

    // Highlight parent question when its answer input gets focus.
    $(".answer input").focus(function () {
        $(this).closest(".answer").prev(".question")
            .css("background-color", "lightgreen");
    });

    // Reset question background when input loses focus.
    $(".answer input").blur(function () {
        $(this).closest(".answer").prev(".question")
            .css("background-color", "");
    });
});