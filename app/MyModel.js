// Este es un ejemplo de como crear una clase modelo para la aplicacion
var observable = require("data/observable"); // generalmente siempre, vamos a extender de data/observable

//En este ejmplo creare el modelo Persona

var Persona = (function(_super){
	__extends(Persona, _super); //Estamos extendiendo de Observable

	function Persona(){
		_super.call(this); // Constructor Padre
		this._nombre = "";
		this._edad = "";
	}

	//Defino mis propiedades con Object.defineProperty
	Object.defineProperty(Persona.prototype, "Nombre", {
		get: function(){
			return this._nombre;
		},
		set: function(value){
			this._nombre = value;
		},
		enumerable:true,
		configurable:true
	});

	Object.defineProperty(Persona.prototype, "Edad", {
		get: function(){
			return this._edad;
		},
		set: function(value){
			this._edad = value;
		},
		enumerable:true,
		configurable:true
	});

	// Tambien podemos declara metodos dentro de nuestro modelo
	Persona.prototype.Saludar = function(){
		alert("Hola como estas !!!");
	};

	// Por ultimo regresamos nuestro modelo
	return Persona;
})(observable.Observable);

// Debemos declarar que este modelo se puede exportar
exports.PersonaViewModel = Persona;