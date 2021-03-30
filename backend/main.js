/*const marked = require('marked');
const fetch = require('node-fetch');
const chalk = require('chalk');  
path2 = pathNode.normalize(path); // will try and calculate the actual path, when it contains relative specifiers like . or .., or double slashes 
const fileCheck = fs.access(); // to check if the folder exists and Node.js can access it with its permissions.
fs.readdir() // o read the contents of a directory. This piece of code reads the content of a folder, both files and subfolders, and returns their relative path
*/

const pathNode = require('path');
const fs = require('fs');
path = process.argv[2]; //the command line arguments are always stored in an array. The second element is the javascript (JS) file we refer to that often comes after the node command.
option = process.argv[3];
option2 = process.argv[4];
console.log(option);
console.log(option2);

//FUNCIÓN PARA VALIDAR SI LA RUTA ES ABSOLUTA
//FUNCIÓN PARA LAS OPCIONES 1) --validate, 2) --stats y 3) --stats --validate
if (path.indexOf("\\") == -1) { //si no lo encuentra, es el nombre del archivo  
     path1 = pathNode.resolve(path); //get the absolute path calculation of a relative path
     fileExists = fs.existsSync(path1);
    if (fileExists === true && path1.slice(-3) === ".md") {   
        console.log('analizar archivo');
        console.log('es un archivo .MD');

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




