var observableArrayModule = require("data/observable-array");
var Observable = require("data/observable").Observable;
var page, 
	mensajes = new observableArrayModule.ObservableArray([
		"Signs point to yes",
		"Yes",
		"Reply hazy, try again",
		"Without a doubt",
		"My sources say no",
		"As I see it, yes",
		"You may rely on it",
		"Concentrate and ask again",
		"Outlook not so good",
		"It is decidedly so",
		"Better not tell you now",
		"Very doubtful",
		"Yes - definitely",
		"It is certain",
		"Cannot predict now",
		"Most likely",
		"Ask again later",
		"My reply is no",
		"Outlook good",
		"Don't count on it"
	]),
	viewModel = new Observable({
		prediccion: "Tap the 8ball for an answer"
	});
/**
* Esta funcion servira para loaded de Page
*/
function onPageLoaded(args){
	page = args.object; // args en native viene tomando el valor de this del elemento donde esta vinculado, en este caso vendra desde Page.
	page.bindingContext = viewModel; // Le inyectamos el Observable  a la vista.
}
/**
* Esta funcion servira para navigatedTo de Page
*/
function onPageNavigatedTo(args){
	page = args.object; // args en native viene tomando el valor de this del elemento donde esta vinculado, en este caso vendra desde Page.
}

function ask(){
	viewModel.set("prediccion", "Asking the Oracle");
	setTimeout(function(){
		var mensaje = mensajes.getItem(Math.floor(Math.random() * mensajes.length));
		viewModel.set("prediccion", mensaje);
	}, 2000);
	
}

//Para usar nuestras funciones en la vista , debemos exportar las funciones como si fueran modulos de nodejs
exports.onLoaded = onPageLoaded;
exports.onNavigatedTo = onPageNavigatedTo;
exports.ask = ask;