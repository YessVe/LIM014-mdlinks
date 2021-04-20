const path = require('path');
const fs = require('fs');
const marked = require('marked');
const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM;
const fetch = require('node-fetch');

const fsPromises = require('fs').promises;

const pathNode = process.argv[2];

// FUNCIÓN QUE VALIDA SI LA RUTA EXISTE Y LA CONVIERTE EN ABSOLUTA CON 1 SOLO BACK SLASH
const rutaExiste = (data) => 
  fs.existsSync(data) ? path.normalize(path.resolve(data)) : "The path doesn't exist";
/* const esAbsoluta = (data) => path.isAbsolute(data); */
//FUNCIÓN QUE FILTRA LOS ARCHIVOS .MD
const tenerMd = (data) => path.extname(data) === ".md";
//FUNCIÓN QUE VERIFICA SI ES UNA CARPETA O DIRECTORIO
const isDirectory = (data) => fs.lstatSync(data).isDirectory(); //devuelve true or false  
console.log(isDirectory(pathNode));

//FUNCIÓN RECURSIVA CUANDO EL USUARIO PASA COMO RUTA UN DIRECTORIO O CARPETA
const getFiles = (ruta) => {
  let files = [];
  if (isDirectory(ruta)) {
    fs.readdirSync(ruta).forEach(function(file){     
      let subpath = ruta + '/' + file;
        if(isDirectory(subpath)){
          /* console.log(files.push(getFiles(rutaExiste(subpath)))); */
            return files.push(getFiles(rutaExiste(subpath)));
        } else if (tenerMd(subpath)) {
            return files.push(rutaExiste(subpath));
        }
    });
  } else {

    if (tenerMd(ruta)) {
      files.push(ruta);
    }

  }
  
  /* console.log(files + "padre nuestro"); */
  return files.flat();
};
console.log(getFiles(pathNode));
/* console.log(fs.readFileSync(getFiles(pathNode), 'utf8')); */

//FUNCIÓN QUE DA LECTURA A UN ARCHIVO .MD
// const readFile = (ruta) => {
//     const a = fs.readFileSync(ruta, 'utf8');
//     const tokens = marked.lexer(a);
//     const html = marked.parser(tokens);
//     const dom = new JSDOM(html);
//     /* const ref = dom.window.document.querySelectorAll("a"); */
//     const todosLosLinks = [];
    
//     dom("a").map(
//       (el, i) =>
//         (todosLosLinks[el] = {
//           href: readHtml(i).attr("href"),
//           text: readHtml(i).text(),
//           file: ruta,
//         })
//     );
    
//     return todosLosLinks;

//   // for (let i = 0; i < ruta.length; i++) {
//   //   console.log(ruta[i]);
//   //   fs.readFileSync(ruta[i], 'utf8' , (err, data) => { 
//   //     if (err) {
//   //         console.error(err)
//   //         return 
//   //       }
//   //       console.log(data);
//   //       return data   
//   //   });
//   //   /* return readFile(ruta[i]); */
//   // }
// };

/* console.log(readFile(getFiles(pathNode))); */



// function convertirHtml (data,ruta) {
//     const filemd=data;
//     const tokens = marked.lexer(filemd); //The Lexer builds an array of tokens, which will be passed to the Parser.
//     const html = marked.parser(tokens); //The Parser processes each token in the token array. takes tokens as input and calls the renderer functions.
//     const dom = new JSDOM(html); 
//     let ref=dom.window.document.querySelectorAll("a"); //busco en el dom todos q tengan referencia <a href="wwww....">
//     let longitud = ref.length;
    
//     if (longitud != 0) {
//       let array = [];
//       ref.forEach((ref)=>{
//         array.push ({
//           href: ref.href,
//           text: ref.textContent,
//           file: ruta,
//         });
//       })

//       validateLink(array);
//       return array
      
//     } else {
//       console.log('Archivo .md no tiene links');
//     } 
// }

// //FUNCIÓN QUE VALIDA SI LOS LINKS ESTÁN 'OK' O 'FAIL'
// const validateLinks = (link) => {
//   return fetch(link, { validate: true })
//     .then((response) => {
//       if (response.status >= 200 && response.status < 400) {
//         return {
//           href: link,
//           statusText: response.statusText,
//           status: response.status,
//         };
//       } else {
//         return { statusText: "FAIL", status: response.status };
//       }
//     })
//     .catch(() => ({
//       status: 500,
//       statusText: "FAIL",
//     }));
// };


// module.exports = {
//   rutaExiste,
//   esAbsoluta,
//   tenerMd,
//   isDirectory,
//   /* getAbsolute,
//   pathExtension, */
// };