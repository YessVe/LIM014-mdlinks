/* module.exports = () => {
  // ...
}; */

/*
const fetch = require('node-fetch');
const chalk = require('chalk');  
path2 = pathNode.normalize(path); // will try and calculate the actual path, when it contains relative specifiers like . or .., or double slashes 
const fileCheck = fs.access(); // to check if the folder exists and Node.js can access it with its permissions.
fs.readdir() // o read the contents of a directory. This piece of code reads the content of a folder, both files and subfolders, and returns their relative path
*/

/*const rutaNormal = (data) => path.normalize(data);*/

const pathNode = require('path');
const fs = require('fs');
const marked = require('marked');
/* path = process.argv[2]; //the command line arguments are always stored in an array. The second element is the javascript (JS) file we refer to that often comes after the node command.
option = process.argv[3];
option2 = process.argv[4];
console.log(path); */
/* console.log(option2); */

/* path1 = pathNode.resolve(path); //get the absolute path calculation of a relative path
console.log(path1);
fileExists = fs.existsSync(path1);
console.log(fileExists); */

//FUNCIÓN PARA VALIDAR SI LA RUTA ES ABSOLUTA
//FUNCIÓN PARA LAS OPCIONES 1) --validate, 2) --stats y 3) --stats --validate

//FX VALIDAR SI LA RUTA ES ABSOLUTA Y EXISTE
/* let ruta = '../practica' */
let ruta = 'D:\\GitHub\\LIM014-mdlinks\\practica\\ARCH SIN LINKS.md'

//FX QUE VALIDA LA RUTA Y VE SI EXISTE O NO
/* function rutaExist (ruta) {  

    if (pathNode.isAbsolute(ruta) === true) {
        if (fs.existsSync(ruta) === true) {
            console.log('ruta ABSOLUTA y SÍ EXISTE');
            return ruta;
        } else {
            return console.log('ruta ABSOLUTA y NO EXISTE');
        }
    } else {
        path1 = pathNode.resolve(__dirname,ruta);
        if (fs.existsSync(path1) === true) {
            console.log('ruta  NO ABSOLUTA y SÍ EXISTE');
            return path1
        } else {
            return console.log('ruta NO ABSOLUTA y NO EXISTE');
        }
    }
} */

rutaExist(ruta);

if (path.indexOf("\\") == -1) { //si no lo encuentra, es el nombre del archivo  
     path1 = pathNode.resolve(path); //get the absolute path calculation of a relative path
     fileExists = fs.existsSync(path1);
    if (fileExists === true && path1.slice(-3) === ".md") {   
        console.log('analizar archivo');
        console.log('es un archivo .MD');
        console.log(fileExists);

        if (option === "--validate") {
            console.log("CLI validate");
        } else if (option === "--stats" && option2 === undefined) {
            console.log("CLI stats");
        } else if (option === "--stats" && option2 === "--validate" ) {
            console.log("CLI stats y validate");
        } 

    } else { 
        console.log('no existe archivo o NO es un archivo .MD');
    }
    console.log('es ruta relativa');
} else {
    fileExists = fs.existsSync(path);
    if (fileExists === true) {   
        console.log('analizar archivo 2');    
    } else { 
        console.log('no existe archivo 2');
    }
    console.log('es una ruta absoluta');
}



//FX QUE VALIDA LA RUTA Y VE SI EXISTE O NO
//en vez de return, debe darme una promesa de resolve
function mdLinks (path,options) {  
    if (pathNode.isAbsolute(ruta) === true) {
        if (fs.existsSync(ruta) === true) {
            console.log('ruta ABSOLUTA y SÍ EXISTE');
            return ruta;
        } else {
            return console.log('ruta ABSOLUTA y NO EXISTE');
        }
    } else {
        path1 = pathNode.resolve(__dirname,ruta);
        if (fs.existsSync(path1) === true) {
            console.log('ruta  NO ABSOLUTA y SÍ EXISTE');
            return path1
        } else {
            return console.log('ruta NO ABSOLUTA y NO EXISTE');
        }
    }
}

console.log(rutaExist(ruta1));


//FX SI LA RUTA EXISTE
function rutaExiste(data) {
    let path1 = pathNode.resolve(__dirname,data);
    if (fs.existsSync(path1) === true) {
        console.log('existe');
        return path1
    } else {
        return console.log('RUTA NO EXISTE');
    }
}
rutaExiste (ruta1);

//creo que esto lo usan para expresiones regulares
const readFile = (data) => fs.readFileSync(data);
console.log(readFile(pathNode));

try {
    const data = fs.readFileSync(pathNode, 'utf8')
    console.log(data)
  } catch (err) {
    console.error(err)
  }






/


fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
        reject('ERROR - No se puede leer el archivo', err)
    }
    else {
        let links = []
        const renderer = new marked.Renderer()
        renderer.link = (href, title, text) => {
            links.push({
                Link: href,
                Titulo: text,
                Ruta: path,
            })
        }
    }
}



 /* let abs = getAbsolute(ruta);

        if (rutaExiste(abs)) {
          if (pathExtension(abs) === '.md') {
            console.log('soy convertida, EXISTO y leer archivo');
            let data = readFile(abs);
            convertirHtml(data,abs);
          } else {
              console.log('Archivo con ruta relativa que no es .md');
          }
        } else {
            console.log('ruta convertida NO EXISTE');
        } */

//para manejar DOM x si solo no maneja node
//https://stackoverflow.com/questions/32126003/node-js-document-is-not-defined
//https://stackoverflow.com/questions/7977945/html-parser-on-node-js
//https://github.com/jsdom/jsdom

function leerArchivo (data) {
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
             
            console.log(x[1].href);
            console.log(x[1].textContent);
}

fs.readFile(ruta, 'utf8' , (err, data) => {
    if (err) {
             console.error(err)
                  return
    }
     console.log(data)
     leerArchivo(data,ruta);
});


/* fetch('https://www.google.com/')
    .then(res => {
      let estado = res.status;
      if (estado == 200) {
        console.log('link válido');
      }
    })
    .catch (err => console.error('link NO VÁLIDO')); */

    let array = ref.map((ref)=>{
        return {
          href: ref.href,
          text: ref.textContent,
          file: ruta,
        };
      })

    let array = [];
      ref.forEach((ref)=>{
        array.push ({
          href: ref.href,
          text: ref.textContent,
          file: ruta,
        });
      })

      for (let i = 0; i < ref.length; i++) {
        ref[i]
        let datos = {
          href: ref[i].href,
          text: ref[i].textContent,
          file: ruta,
        };
      array.push(datos);
      }


      /* function validateLink(data) {
  for (let i = 0; i < data.length; i++) {
    fetch(data[i].href)
      .then(res => {
        data[i].status=res.status;
        data[i].mensaje = res.status===200 ? 'OK' : 'FAIL';
        console.log(data);
      })
      .catch (err => {
          console.log(data[i].href);
      });  
  }
} */

/* const validateLinks = (data, ruta) => data.map((obj) =>

  fetch(obj.href)
    .then((res) => {
      return {
        href: obj.href,
        text: obj.textContent,
        file: ruta,
        status: res.status,
        message: res.status===200 ? 'OK' : 'FAIL';
      }
    })
    .catch(()=> ({
      status: 500,
      statusText: "FAIL",
    }));


); */


// function validateRuta (ruta, files) {  
//     if (esAbsoluta(ruta)) {
//         if (rutaExiste(ruta)) {


//             getFiles(ruta)
          


//           if (pathExtension(ruta) === '.md') {
//             let data = readFile(ruta);
//             console.log(data);
//             convertirHtml(data,ruta);
//           } else {
//               console.log('Archivo con ruta absoluta que no es .md');
//           }
//         } else {
//             console.log('ruta ABSOLUTA y NO EXISTE');
//         }
//     } else {
//       console.log('me voy a convertir');  
//       validateRuta(getAbsolute(ruta));               
//     }
// }
// validateRuta(pathNode, files);


// const validateLinks = (link) => {
//   return fetch(link, { validate: true })
//     .then((response) => {
//       if (response.status >= 200 && response.status < 400) {
//         console.log('ver status x aqui');
//         return {
//           href: link,
//           statusText: response.statusText,
//           status: response.status,
//         };
//       } else {
//         return { statusText: "FAIL", status: response.status };
//       }
//     })
//     .then((data) => {
//       console.log(array);

//     })
//     .catch((err) => {
//       console.log('err');
//       /* status: 500,
//       statusText: "FAIL", */
//     });
// };


/*   ruta.forEach((elemento) => {
  const leerMd = fs.readFileSync(path, 'utf8');
  const tokens = marked.lexer(leerMd); //The Lexer builds an array of tokens, which will be passed to the Parser.
  const html = marked.parser(tokens); //The Parser processes each token in the token array. takes tokens as input and calls the renderer functions.
  const dom = new JSDOM(html); 
  let ref=dom.window.document.querySelectorAll("a"); //busco en el dom todos q tengan referencia <a href="wwww....">
  let longitud = ref.length;
  let arrayLinks = [];
  if (longitud != 0) { 
    let validateLink =  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    ref.forEach((ref)=>{
      if (validateLink.test(ref.href)) {
      arrayLinks.push ({
        href: ref.href,
        text: ref.textContent,
        file: path,
      });
      }
    })
  } else {
    console.log('Archivo .md no tiene links');
  } 
  return arrayLinks
  })*/