$(document).ready(function () {

    // Clicking a manager highlights their direct reports.
    $(".manager").click(function () {
        $(this).siblings(".employee").toggleClass("highlight");
    });

    // Show contact information using next().
    $(".employee").hover(
        function () {
            $(this).children(".contact").show();
        },
        function () {
            $(this).children(".contact").hide();
        }
    );

    // Clicking a department heading changes its members' background.
    $(".departmentName").click(function () {
        $(this).parent().children(".employee")
            .css("background-color", "lightyellow");
    });

    // Select a random employee and highlight their siblings.
    $("#randomEmployee").click(function () {
        let employees = $(".employee:not(.manager)");
        let randomIndex = Math.floor(Math.random() * employees.length);

        $(".employee").removeClass("highlight");

        let selected = employees.eq(randomIndex);
        selected.addClass("highlight");

        // parent() finds the department; siblings() selects other employees.
        selected.parent().children(".employee")
            .not(selected).addClass("highlight");
    });

    // Collapse or expand the team using parent() and find().
    $("#collapseTeam").click(function () {
        let team = $(this).parent().find("#team");
        team.slideToggle();
    });
});