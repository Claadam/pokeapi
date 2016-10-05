var input = $("#input")
var Name = $("#name-text");
var ID = $("#id")
var Type = $("#type");
var ability = $("#ability");

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("input", valueToSave);
  }
})

var url = "https://pokeapi.co/api/v2/pokemon/" + input



console.log(":D")
function getPokemon() {
  console.log("getting")
  $.ajax({
    method: "GET",
    url: url,    
    success: function(res) {
      console.log("got it")
      console.log(res)
      Name.html(res["name"] + ":")
      ID.html("ID: " + res["id"])
      Type.html("Type(s): " +res["types"][0].type.name + ", " + res["types"][1].type.name)      
      ability.html ("Ability(ies): " + res["ability"])
    }
  })
}

