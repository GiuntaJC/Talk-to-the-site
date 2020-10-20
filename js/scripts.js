$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Hello user!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye</li>");
    $("ul#webpage").prepend("<li>Goodbye user!</li>");
  });

  $("button#dark").click(function() {
    $("ul#user").prepend("<li>Lights out!</li>");
    $("ul#webpage").prepend("<li>It's very dark!</li>");
    $("body").addClass("darkTheme");
    $("button#light").toggle();
    $("button#dark").toggle();
  });

  $("button#light").click(function() {
    $("ul#user").prepend("<li>Lights on!</li>");
    $("ul#webpage").prepend("<li>It's very bright!</li>");
    $("body").removeClass();
    $("button#light").toggle();
    $("button#dark").toggle();
  });
});