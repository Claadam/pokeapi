var Name = $("#name-text");
var Type = $("#type")
var ability = $("#ability"




console.log(":D")
function getPokemon() {
  console.log("getting")
  $.ajax({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/1",    
    success: function(res) {
      console.log("got it")
      console.log(res)
      Name.html(res["name"] + "'s ID is " + res["id"])
      Type.html(res["name"] + "'s type is is " + res["type"])
      ability.html
    }
  })
}

