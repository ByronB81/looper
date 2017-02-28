$(document).ready(function() {

    var clickers = ["h1", "p"];

    clickers.forEach(function(clicker) {
      console.log(clicker);
      var alerting = $(clicker).click(function(){
        alert("This is a " + clicker);
      })
    });


  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
  // });
});
