'use strict';

var EventEmitter = require('events').EventEmitter;

function Options(group) {
  EventEmitter.call(this);
  this._group = typeof group === 'object' ? group : {};
}
Options.prototype = Object.create(EventEmitter.prototype);
Options.prototype.constructor = Options;

Options.prototype.list = function () {
  return Object.keys(this._group);//Devuelve un array con las propiedades
	//del objeto enumeradas.
};

Options.prototype.get = function (id) {
  return this._group[id];//Devuelve una propiedad del objeto segun el "id"
};

Options.prototype.select = function (id) {
var opcion = this.get(id);
	if (opcion === undefined){
	       	this.emit('choseError', 'option-does-not-exist', id);
	}
	else {
		this.emit ('chose', id, opcion);  
	}


  // Haz que se emita un evento cuando seleccionamos una opción.
};

module.exports = Options;
