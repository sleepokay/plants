$( document ).ready( function() {
  // populate the nav bar on initial load
  Object.keys(plants).forEach(function(key) {
    var name = plants[key].name;
    $("#navbar").append('<a href="#"><li class="plants" id="' + key + '">' + name + '</li></a>');});

  // initialize with random plant selected
  if (selected == -1)
    selected = Math.floor(Math.random() * Object.keys(plants).length);
  $('#' + selected).addClass('selected');

  $('.plants').on('click', function() {
    noLoop();

    console.log(selected);
    $('#' + selected).removeClass('selected');
    selected = this.id;
    $('#' + selected).addClass('selected');
    console.log(selected);

    reset();
  });

});
