$(document).ready(function () {

    // Filter courses whenever the user types.
    $("#search").keyup(function () {
        let searchText = $(this).val().toLowerCase();
        let matchedCount = 0;

        $(".course").each(function () {
            let courseName = $(this).text();

            // Check whether the course name contains the search text.
            if (courseName.toLowerCase().includes(searchText)) {
                $(this).show();
                matchedCount++;

                // Highlight the matching course.
                if (searchText !== "") {
                    $(this).css({
                        "background-color": "lightyellow",
                        "font-weight": "bold"
                    });
                } else {
                    $(this).css({
                        "background-color": "",
                        "font-weight": "normal"
                    });
                }
            } else {
                $(this).hide();
                $(this).css({
                    "background-color": "",
                    "font-weight": "normal"
                });
            }
        });

        // Update the matched course count.
        $("#count").text("Matching courses: " + matchedCount);
    });

    // Clear search and display all courses again.
    $("#clearSearch").click(function () {
        $("#search").val("");
        $(".course").show().css({
            "background-color": "",
            "font-weight": "normal"
        });

        $("#count").text("Total courses: " + $(".course").length);
    });
});