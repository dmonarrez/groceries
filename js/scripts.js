$(document).ready(function () {
  $("form").submit(function(event) {
    event.preventDefault();

    let ids = ["dairy", "meat", "dessert", "toy", "veg", "cleaning"];
    let list = [];

    // fill list
    ids.forEach(function (id) {
      let input = $("#" + id).val();
      list.push(input);

    });

    //sorts list
    list.sort();

    //add to unordered list
    list.forEach(function (item) {
      $("ul").append("<li>"+item+"</li>");
    });

    //hide
    $("form").hide();
  });
});
