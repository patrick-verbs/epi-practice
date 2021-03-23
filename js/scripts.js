$(document).ready(function() {

  // $(".round-slider").is(":unchecked") {
  //   $("body").removeClass();
  // });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});

if ($("input#dark").is(":checked") {
  $("body").removeClass();
  $("body").addClass("dark-mode");
}));
