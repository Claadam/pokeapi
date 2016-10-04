var Name = $("#name-text");
var ID = $("#id")
var Type = $("#type");
var ability = $("#ability");




console.log(":D")
function getPokemon() {
  console.log("getting")
  $.ajax({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/100",    
    success: function(res) {
      console.log("got it")
      console.log(res)
      Name.html(res["name"] + ":")
      ID.html("ID: " + res["id"])
      Type.html("Type(s): " +res["types"][0].type[0].name)      
      ability.html ("Ability(ies): " + res["ability"])
    }
  })
}

