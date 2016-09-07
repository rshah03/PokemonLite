//Use table/map to show moveset?
//Use linkedlist to show items in bag -- could use map/table to organize items by type??
//                                    |--> table/map of linkedlist
yourMove = 0;

function Move(moveName, damage, pp) {
    this.moveName = moveName;
    this.damage = damage;
    this.pp = pp;
}

function Pokemon(pokemonName, pokemonImage, hp, state, isCurrent, moveset) {
    this.pokemonName = pokemonName;
    this.pokemonImage = pokemonImage;
    this.hp = hp;
    this.state = state;
    this.isCurrent = isCurrent;
    this.moveset = moveset;
}
//Create moves
/*
var aeroblast = new Move('Aero Blast', 20);
var hiddenPower = new Move('Hidder Power', 15);
var recover = new Move('Recover', -10);
var hydropump = new Move('Hydropump', 20);
*/
var aeroBlast = new Move('Aero Blast', 20, 5);
//var LugiaMoveset = [Move('Aero Blast', 20, 5), Move('Hidden Power', 13, 10), Move('Recover', -10, 10), Move('Hydropump', 15, 7)];
var LugiaMoveset = [aeroBlast];
var Lugia = new Pokemon('Lugia', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/lugia.gif', 100, 'alive', true, LugiaMoveset);




function move1() {
	console.log(Lugia.moveset[0].moveName); // -- Used 
    //docuement.getElementById('dialog-message').innerHTML = 'Lugia used move 1!';

}
