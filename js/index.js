$( function() {
  $( "#sortable" ).sortable({
    connectWith: ".card",
    placeholder: "placeholder",
    forcePlaceholderSize: true,
    cursor: 'move'
  });
  $( "#sortable" ).disableSelection();
});
