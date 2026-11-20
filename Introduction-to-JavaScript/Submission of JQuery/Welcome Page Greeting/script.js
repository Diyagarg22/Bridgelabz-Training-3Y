$(document).ready(function () {

    // Display greeting according to current time.
    let hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 17) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    $("#greeting").text(greeting);

    // Change greeting to a motivational quote.
    $("#changeGreeting").click(function () {
        $("#greeting").text("Believe in yourself and keep learning!");
    });

    // Toggle welcome message visibility.
    $("#toggleMessage").click(function () {
        $("#welcomeMessage").toggle();
    });

    // Show alert when greeting is clicked.
    $("#greeting").click(function () {
        alert("Welcome to our website!");
    });
});