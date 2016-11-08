'use strict';

function TurnList() {}

TurnList.prototype.reset = function (charactersById) {
  this._charactersById = charactersById;
  this._turnIndex = -1;
  this.turnNumber = 0;
  this.activeCharacterId = null;
  this.list = this._sortByInitiative();
};

TurnList.prototype.next = function () {
         
	var boool = false;
	var i = 0;
	/*for(var elem in this.list){//[c,b,a]
		
		if(!this._charactersById[elem]._isDead){
			this.activeCharacterId = this.list[elem];
			
		}		
	}*/
	while(!boool && i < this.list.length){

		if(!this._charactersById[this.list[i]].isDead()){

			this.activeCharacterId =this.list[i];
			this.turnNumber++;
			boool = true;
		}

		i++;
	

	}


	

	var turn = {};

/*	turn = {number: this.turnNumber, party: this. _charactersById[this.list[i]].party, activeCharacterId: this.activeCharacterId };*/
	turn.number = this.turnNumber;
	turn.party = this. _charactersById[this.activeCharacterId].party;
	turn.activeCharacterId = this.activeCharacterId;
  
	
	return turn;
	
 // Haz que calcule el siguiente turno y devuelva el resultado
 // según la especificación. Recuerda que debe saltar los personajes
 // muertos.
};

TurnList.prototype._sortByInitiative = function () {
	var charactersArr = [];
	for( var characters in this._charactersById)//Cada personaje en _charactersById
		charactersArr.push({name: characters,
		initiative: this._charactersById[characters].initiative});
	//lo mete en un array para despues ordenarlo

	charactersArr.sort(function (a, b) {//Los objetos en charactersArr 
		//son ordenados de mayor a menor por su iniciativa
		if (a.initiative > b.initiative) {
			return -1;
		}
		if (a.initiative < b.initiative) {
			return 1;
		}
		return 0;
	});

	var list = [];//Se usa para devolver el array de los objetos ordenados
	for( var character in charactersArr){
	
		list.push(charactersArr[character].name);
	}

	return list;

  // Utiliza la función Array.sort(). ¡No te implementes tu propia
  // función de ordenación!
};

module.exports = TurnList;
