const path = require('path');
const fs = require('fs');
const marked = require('marked');
const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM;

const pathNode = process.argv[2];

const rutaExiste = (data) => fs.existsSync(data);
console.log(rutaExiste (pathNode));  
const esAbsoluta = (data) => path.isAbsolute(data);
console.log(esAbsoluta(pathNode));
const getAbsolute = (data) => path.resolve(data);
console.log(getAbsolute(pathNode));
/*const rutaNormal = (data) => path.normalize(data);
console.log(rutaNormal(pathNode));*/
/* const folderPath = (data) => fs.readdirSync */


function rutaExist (ruta) {  
    if (esAbsoluta(ruta)) {
        if (rutaExiste(ruta)) {
            
            fs.readFile(ruta, 'utf8' , (err, data) => {
                if (err) {
                  console.error(err)
                  return
                }
               /*  console.log(data) */
                leerArchivo(data,ruta);
              });
            
              //puedo hacer la asincronía

        } else {
                console.log('ruta ABSOLUTA y NO EXISTE');
            }
    } else {
        let abs = getAbsolute(ruta);
        if (rutaExiste(abs)) {
            console.log('soy convertida, EXISTO y leer archivo');
            return leerArchivo(abs);
        } else {
                console.log('ruta convertida NO EXISTE');
            }
    }
}
rutaExist (pathNode);

function leerArchivo (data,ruta) {
    const filemd=data;
    let array = [];
    const tokens = marked.lexer(filemd); //The Lexer builds an array of tokens, which will be passed to the Parser.
    /* console.log(tokens); */
    //convierte md a html para poder W con DOM
    const html = marked.parser(tokens); //The Parser processes each token in the token array. takes tokens as input and calls the renderer functions.
    /* console.log(html); */
    const dom = new JSDOM(html);
    /* console.log(dom); */
    //busco en el dom todos q tengan referencia <a href="wwww....">
    let ref=dom.window.document.querySelectorAll("a"); 
    console.log(ref); 

  for (let i = 0; i < ref.length; i++) {
      /* console.log(ref[i].textContent);
      console.log(ref[i].href); */
      let datos = {
        href: ref[i].href,
        text: ref[i].textContent,
        file: ruta,
      };
  array.push(datos);
  }
  console.log(array);
    //haces un for . yo simplemente lo leo
}




module.exports = {
/* esAbsoluta, */
/* rutaExiste, */
};