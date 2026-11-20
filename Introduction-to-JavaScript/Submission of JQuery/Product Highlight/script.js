$(document).ready(function () {

    // Highlight product when clicked.
    $(".product").click(function () {
        $(this).toggleClass("highlight");

        // Alert if the product is out of stock.
        if ($(this).attr("data-stock") === "no") {
            alert("Sorry! This product is out of stock.");
        }
    });

    // Show details when mouse enters and hide on mouse leave.
    $(".product").hover(
        function () {
            $(this).find(".details").show();
        },
        function () {
            $(this).find(".details").hide();
        }
    );

    // Toggle favorite selection.
    $(".favorite").click(function (event) {
        event.stopPropagation();
        $(this).toggleClass("selected");
    });
});