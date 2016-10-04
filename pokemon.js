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
      Name.html(res["name"] + "'s ID is " + res["id"])
      Type.html(res["name"] + "'s type is is " + res["types"])
      ability.html (res["name"] + "'s abilities are " + res[""])
    }
  })
}

