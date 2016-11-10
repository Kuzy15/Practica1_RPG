'use strict';

function CharactersView() {
  this._views = {};
}

CharactersView.prototype._visibleFeatures = [
  'name',
  'party',
  'initiative',
  'defense',
  'hp',
  'mp',
  'maxHp',
  'maxMp'
];

CharactersView.prototype.all = function () {
  return Object.keys(this._views).reduce(function (copy, id) {
    copy[id] = this._views[id];
    return copy;
  }.bind(this), {});//valor inicial es vacio.
	//Object.keys(obj)--> devuelve un array con las propiedades
	//enumerables del objeto "obj"
	//El m�todo reduce() aplica una funci�n a un acumulador 
	//y a cada valor de un array (de izquierda a derecha) 
	//para reducirlo a un �nico valor.
};

CharactersView.prototype.allFrom = function (party) {
  return Object.keys(this._views).reduce(function (copy, id) {
    if (this._views[id].party === party) {
      copy[id] = this._views[id];
    }
    return copy;
  }.bind(this), {});	
};

CharactersView.prototype.get = function (id//'Tank'-->_views) {
  return this._views[id] || null;
};

CharactersView.prototype.set = function (characters) {//{Tank y Wizz
  this._views = Object.keys(characters).reduce(function (views, id) {
    views[id] = this._getViewFor(characters[id]);
    return views;
  }.bind(this), {});
};

CharactersView.prototype._getViewFor = function (character) {
  var view = {};
  
  for ( var caracteristica in this._visibleFeatures){

	  view.caracteristica = null;
  
  }
  
  var arrIndex = Object.keys(view);

  // Usa la lista de características visibles y Object.defineProperty() para
  // devolver un objeto de JavaScript con las características visibles pero
  // no modificables.
  
  for(var i = 0; i < arrIndex.lenght; i++ ){
	 
	  (function(index){

		  Object.defineProperty(view, view[Object.keys(view)[i]] , {
    
		  get: function () {

			  return view[Object.keys(view)[i]];
	    
      // ¿Cómo sería este getter para reflejar la propiedad del personaje?
    
		  },
    
		  set: function (character[Object.keys(character)[i]]) {

			  view[Object.keys(view)[i]] = character[Object.keys(character)[i]];

      // ¿Y este setter para ignorar cualquier acción?
    
		  },
    
		  enumerable: true
  
	  
		  });
	  }(i));
		  
  }
  return view;
  // Acuérdate de devolver el objeto.

}

module.exports = CharactersView;
