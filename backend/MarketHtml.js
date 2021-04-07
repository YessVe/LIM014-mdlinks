//para archivos md
const marked = require('marked');

//para manejar DOM x si solo no maneja node
//https://stackoverflow.com/questions/32126003/node-js-document-is-not-defined
//https://stackoverflow.com/questions/7977945/html-parser-on-node-js
//https://github.com/jsdom/jsdom

var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM; //

//poner la ruta de tu archivo md
const filemd=`
[GitHub](http://gist.github.com/rxjjaviers/7360908)
[Link](https://gist.github.com/rddxjjaviers/7360908)
`;

const tokens = marked.lexer(filemd);
console.log(tokens);

//convierte md a html para poder W con DOM
const html = marked.parser(tokens);
console.log(html);

const dom = new JSDOM(html);
//busco en el dom todos q tengan referencia <a href="wwww....">
x=dom.window.document.querySelectorAll("a"); 
console.log(dom.window.document.querySelectorAll("a")); 

//cantidades encontradas
console.log(x.length); //2
//haces un for . yo simplemente lo leo

//1er elemento encontrado poner en console.log para q veas
console.log(x[0].href);
console.log(x[0].textContent);

//2do elemento encontrado poner en console.log para q veas

console.log(x[1].href);
console.log(x[1].textContent);

// una vez encontrado guardarle en un array y de ahi ya verificas si el link es valido o no

//Gracias =)