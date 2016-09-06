//Use table/map to show moveset?
//Use linkedlist to show items in bag -- could use map/table to organize items by type??
  //                                    |--> table/map of linkedlist
yourMove = 0;


function Pokemon(name, moveset, hp) {
  this.name = name;
  this.moveset = moveset;
  this.hp = hp;
}

var Lugia = new Pokemon('Lugia', ['Aeroblast', 'Hidden Power', 'Weather Ball'], 100)
function fight() {
  console.log(Lugia);
}
