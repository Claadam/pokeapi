var input = "#input"

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    getPokemon();
  }})