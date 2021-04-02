const pathNode = require('path');
const fs = require('fs');

/* path = process.argv[2];
console.log(path); */
//FX VALIDAR SI LA RUTA ES ABSOLUTA Y EXISTE
/* let ruta1 = '../practica'; */
/* let ruta1 = 'D:\\GitHub\\LIM014-mdlinks\\practica\\ARCH SIN LINKS.md'; */
let ruta1 = './pruebalinks.md';

//FX SI LA RUTA ES ABSOLUTA
function esAbsoluta (data) {
    if (pathNode.isAbsolute(data) === true) {
        console.log('soy Absoluta');
        return data
    } else {
        console.log('soy relativa y me convierto');
        return pathNode.resolve(__dirname,data)
    }
}
esAbsoluta(ruta1);
//FX SI LA RUTA EXISTE
function rutaExiste(data) {
    path1 = pathNode.resolve(__dirname,data);
    if (fs.existsSync(path1) === true) {
        console.log('existe');
        return path1
    } else {
        return console.log('RUTA NO EXISTE');
    }
}
rutaExiste (ruta1);


module.exports = {
/* esAbsoluta, */
/* rutaExiste, */
};