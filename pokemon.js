console.log("aah");

var input = $("#input");
var Name = $("#name-text");
var ID = $("#id");
var Type = $("#type");
var ability = $("#ability");

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var number = input.val();
  }
})

var url = "https://pokeapi.co/api/v2/pokemon/" + number



console.log(":D")

function getPokemon() {
  console.log("getting")
  $.ajax({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/620",    
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