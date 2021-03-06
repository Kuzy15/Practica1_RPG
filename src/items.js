'use strict';


function Item(name, effect) {
  this.name = name;
  this.effect = effect;
}



function Weapon(name, damage, extraEffect) {
   this.extraEffect = extraEffect || new Effect({});	
   this.extraEffect.hp = -damage;
   Item.apply(this, [name, this.extraEffect]); 
   //Haz que Weapon sea subtipo de Item haciendo que llame al constructor de
   //de Item.
}

//Termina de implementar la herencia haciendo que la propiedad prototype de
//Item sea el prototipo de Weapon.prototype y recuerda ajustar el constructor.

Weapon.prototype = Object.create(Item.prototype); 
Weapon.prototype.constructor = Weapon;

function Scroll(name, cost, effect) {
  Item.apply(this, [name, effect]);
  this.cost = cost;
}
Scroll.prototype = Object.create(Item.prototype);
Scroll.prototype.constructor = Scroll;

Scroll.prototype.canBeUsed = function (mp) {
  //El pergamino puede usarse si los puntos de maná son superiores o iguales
  //al coste del hechizo.
  return(mp >= this.cost);
  
};

function Effect(variations) {
  
	for (var name in variations){
   
	       	this[name] = variations[name];
  
	}
  
  /*this.initiative = variations.initiative;
  this.defense = variations.defense;
  this.hp = variations.hp;
  this.maxHp = variations.maxHp;
  this.mp = variations.mp;
  this.maxMp = variations.maxMp;*/
  //Copia las propiedades que se encuentran en variations como propiedades de
  //este objeto.
}

module.exports = {
  Item: Item,
  Weapon: Weapon,
  Scroll: Scroll,
  Effect: Effect
};
