$(function() {
  console.log("working?");
$("#submit").on("submit", function(event) {
    event.preventDefault();
console.log("click worked");
    var newBurger = {
      burger_name: $("#burgerInfo").val().trim(),
      ;

    // Send the POST request.
    //  I changed the route from api/burgers to /burgers/create because it's burgers/create in burgers_controller
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});