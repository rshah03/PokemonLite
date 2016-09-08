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
var aeroBlast = new Move('Aero Blast', 20, 4);
var hiddenPower = new Move('Hidden Power', 13, 6);
var dragonClaw = new Move('Dragon Claw', 12, 7);
var hydropump = new Move('Hydropump', 15, 5);

//var LugiaMoveset = [Move('Aero Blast', 20, 5), Move('Hidden Power', 13, 10), Move('Recover', -10, 10), Move('Hydropump', 15, 7)];
var LugiaMoveset = [aeroBlast, hiddenPower, dragonClaw, hydropump];
var Lugia = new Pokemon('Lugia', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/lugia.gif', 100, 'alive', true, LugiaMoveset);

var pokemon = [Lugia]; //List of all pokemon -- implement this as a linked list
var currentPokemon;

function getCurrentPokemon(pokemon) {
    for (var i = 0; i < pokemon.length; i++) {
        if (pokemon[i].isCurrent === true)
            currentPokemon = pokemon[i];

    }
    return currentPokemon;
}

function isFainted(status) {
    if (stats.equals('FAINTED')) {
        $('#dialog-message').html(Lugia.pokemonName + ' has fainted.');
    }
}

function move1() {

    //TODO: Implement function above to calculate a critical chance
    var move = Lugia.moveset[0];
    $('#dialog-message').html(Lugia.pokemonName + ' used ' + move.moveName);
    // ^ Change this to be dynamic and fetch pokemonName from getCurrentPokemon
    hpAfterMove = move;
    if (move.pp !== 0) {
         var currentOpponentHP = $('#opponent-HP').text();
        var newOpponentHP = currentOpponentHP - move.damage;
        if (newOpponentHP > 0) {
            $('#opponent-HP').html(newOpponentHP);
        } else if ((currentOpponentHP - move.damage) <= 0) {
            $('#opponent-HP').html('0 (FAINTED)');
        }
        move.pp--;
    }
    else
        $('#dialog-message').html(move.moveName + ' has no more PP left. Pick another...');
}

function move2() {

    //TODO: Implement function above to calculate a critical chance
    var move = Lugia.moveset[1];
    $('#dialog-message').html(Lugia.pokemonName + ' used ' + move.moveName);
    // ^ Change this to be dynamic and fetch pokemonName from getCurrentPokemon
    hpAfterMove = move;
    if (move.pp !== 0) {
         var currentOpponentHP = $('#opponent-HP').text();
        var newOpponentHP = currentOpponentHP - move.damage;
        if (newOpponentHP > 0) {
            $('#opponent-HP').html(newOpponentHP);
        } else if ((currentOpponentHP - move.damage) <= 0) {
            $('#opponent-HP').html('0 (FAINTED)');
        }
        move.pp--;
    }
    else
        $('#dialog-message').html(move.moveName + ' has no more PP left. Pick another...');
}

function move3() {

    //TODO: Implement function above to calculate a critical chance
    var move = Lugia.moveset[2];
    $('#dialog-message').html(Lugia.pokemonName + ' used ' + move.moveName);
    // ^ Change this to be dynamic and fetch pokemonName from getCurrentPokemon
    hpAfterMove = move;
    if (move.pp !== 0) {
         var currentOpponentHP = $('#opponent-HP').text();
        var newOpponentHP = currentOpponentHP - move.damage;
        if (newOpponentHP > 0) {
            $('#opponent-HP').html(newOpponentHP);
        } else if ((currentOpponentHP - move.damage) <= 0) {
            $('#opponent-HP').html('0 (FAINTED)');
        }
        move.pp--;
    }
    else
        $('#dialog-message').html(move.moveName + ' has no more PP left. Pick another...');
}

function move4() {

    //TODO: Implement function above to calculate a critical chance
    var move = Lugia.moveset[3];
    $('#dialog-message').html(Lugia.pokemonName + ' used ' + move.moveName);
    // ^ Change this to be dynamic and fetch pokemonName from getCurrentPokemon
    hpAfterMove = move;
    if (move.pp !== 0) {
         var currentOpponentHP = $('#opponent-HP').text();
        var newOpponentHP = currentOpponentHP - move.damage;
        if (newOpponentHP > 0) {
            $('#opponent-HP').html(newOpponentHP);
        } else if ((currentOpponentHP - move.damage) <= 0) {
            $('#opponent-HP').html('0 (FAINTED)');
        }
        move.pp--;
    }
    else
        $('#dialog-message').html(move.moveName + ' has no more PP left. Pick another...');
}
