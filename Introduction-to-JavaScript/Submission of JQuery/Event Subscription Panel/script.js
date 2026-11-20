$(document).ready(function () {

    // Delegated click event works for existing and dynamically added topics.
    $("#topics").on("click", ".subscribe", function () {
        let topic = $(this).closest(".topic");
        topic.attr("data-subscribed", "true");

        $("#message").text(
            "Successfully subscribed to " + topic.find("span").text()
        );
    });

    // Unsubscribe and disable notifications.
    $("#topics").on("click", ".unsubscribe", function () {
        let topic = $(this).closest(".topic");
        topic.attr("data-subscribed", "false");

        $("#message").text(
            "Unsubscribed from " + topic.find("span").text()
        );
    });

    // Add a new topic dynamically.
    $("#addTopic").click(function () {
        let name = $("#newTopic").val().trim();

        if (name === "") {
            $("#message").text("Please enter a topic.");
            return;
        }

        let newItem = $("<div>").addClass("topic").attr("data-subscribed", "false");

        $("<span>").text(name).appendTo(newItem);
        $("<button>").addClass("subscribe").text("Subscribe").appendTo(newItem);
        $("<button>").addClass("unsubscribe").text("Unsubscribe").appendTo(newItem);
        $("<button>").addClass("remove").text("Remove").appendTo(newItem);

        $("#topics").append(newItem);
        $("#newTopic").val("");

        $("#message").text("New topic added successfully!");
    });

    // Remove a topic and detach its click handlers using off().
    $("#topics").on("click", ".remove", function () {
        let topic = $(this).closest(".topic");

        topic.off("click");
        topic.remove();

        $("#message").text("Topic removed successfully!");
    });
});