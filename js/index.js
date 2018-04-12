$( function() {
  $( "#sortable" ).sortable({
    connectWith: ".box",
    placeholder: "box-placeholder",
    forcePlaceholderSize: true
  });
  $( "#sortable" ).disableSelection();
});
