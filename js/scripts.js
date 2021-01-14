function information(input) {
  if (animal === "turtle") {
    $("#turtles").show();
  } else if (animal === "snake") {
    $("#snakes").show(); 
  } else {
    $("#pangolins").show();
  } 
} 

  $(document).ready(function() {
    $("form#animals").submit(function(event) {
      event.preventDefault();
      const animal = $("input:radio[name=animalType]:checked").val();
      $("#hidden").hide();
      information(input);
    });
  });