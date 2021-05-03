const {
  rutaExiste,
  tenerMd,
  isDirectory,
  getFiles,
  readFile,
  validateLinks,
  mdLinks,
  leeUnArchivo} = require('../backend/index.js');
const fetch = require('node-fetch')
jest.mock('node-fetch')

//FUNCIÓN QUE VALIDA SI UNA RUTA EXISTE Y LA DEVUELVE ABSOLUTA DE SER ASÍ
  describe('Función que debe determinar si la ruta existe y de ser así, cambiarla a absoluta', () => {
    it('Debe retornar la ruta existente y convertirla en absoluta', () => {
      expect(rutaExiste(__dirname + '/practica')).toEqual("D:\\GitHub\\LIM014-mdlinks\\test\\practica");
    });
  
    it('Debe retornar un mensaje si se pasa una ruta no existente', () => {
      expect(rutaExiste(__dirname + '/practica2')).toEqual("The path doesn't exist");
    });
  });

//FUNCIÓN QUE VALIDA/FILTRARÁ LOS ARCHIVOS .MD
describe('Función que valida si los archivos son markdown o extensión .md', () => {
  it('Debería ser una función', () => {
    expect(typeof tenerMd).toBe('function');
  });
  it('Debería retornar TRUE si el archivo tiene extensión .md', () => {
    expect(tenerMd('D:\\GitHub\\LIM014-mdlinks\\backend\\pruebalinks.md')).toBe(true);
  });
  it('Debería retornar FALSE si el archivo NO tiene extensión .md', () => {
    expect(tenerMd('D:\\GitHub\\LIM014-mdlinks\\backend\\cli.js')).toBe(false);
  });
});

//FUNCIÓN QUE VERIFICA SI ES UNA CARPETA O DIRECTORIO
describe('Función que valida si la ruta pertenece a una carpeta o directorio', () => {
  it('Debería ser una función', () => {
    expect(typeof isDirectory).toBe('function');
  });
  it('Debería retornar TRUE si la ruta es un directorio', () => {
    expect(isDirectory('D:\\GitHub\\LIM014-mdlinks\\test\\practica')).toBe(true);
  });
  it('Debería retornar FALSE si la ruta no existe', () => {
    expect(isDirectory('D:\\GitHub\\LIM014-mdlinks\\backend\\pruebalinks.md')).toBe(false);
  });
}); 

//FUNCIÓN RECURSIVA CUANDO EL USUARIO PASA COMO RUTA UN DIRECTORIO O CARPETA
describe('Función que lee un directorio recursivamente', () => {
  it('Debe leer el directorio y sus subcarpetas. También, filtra y devuelve solo los archivos .md', () => {
    expect(getFiles(__dirname + "/practica")).toEqual([
      'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\con_LINKS.md',
      'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\pruebalinks.md',
      'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\sin_LINKS.md',
      'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\sin_LINKS.md',
    ]);
  });
  it('Debe devolver la ruta absoluta si se pasa un archivo con extensión .md' , () =>{
    expect(getFiles(__dirname + "/sin_LINKS.md")).toEqual([
      'D:\\GitHub\\LIM014-mdlinks\\test\\sin_LINKS.md',
    ]);
  });
});


//FUNCIÓN QUE LEE UN ARCHIVO MARKDOWN, LO CONVIERTE A HTML Y TOMA LOS LINKS PARA SER DEVUELTOS EN UN ARRAY
describe('Función que lee un archivo .md, convierte a HTML y toma las etiquetas <a>',() => {
  it('Debería ser una función', () => {
    expect(typeof leeUnArchivo).toBe('function');
  });
  it('Debe devolver un array de links que fueron tomados del archivo markdown', () => {
    expect(leeUnArchivo('D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\con_LINKS.md')).toEqual([
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\con_LINKS.md'
      },
      {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\con_LINKS.md'
      }
    ]);
  });
});

//FUNCIÓN CUANDO PASAS MÁS DE UN ARCHIVO .MD, SE LEE, LA CONVIERTE EN HTML Y OBTIENES LOS LINKS - RESULTADO ES UN ARREGLO
describe('Función que lee un archivo .md pero el input es más de un archivo',() => {
  it('Debería ser una función', () => {
    expect(typeof readFile).toBe('function');
  });
  it('Debe devolver un array de links que fueron tomados del archivo markdown', () => {
    expect(readFile([
      'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\pruebalinks.md',
      'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\sin_LINKS.md',
    ])).toEqual([
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\pruebalinks.md'
      },
      {
        href: 'https://nodej000000s.org/es/',
        text: 'Node.js',
        file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\pruebalinks.md'
      },
      {
        href: 'https://www.lego.com/en-us/notfound',
        text: 'Link roto',
        file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\pruebalinks.md'
      }
    ]);
  });
});


//-------------VARIABLES PARA LA FUNCIÓN QUE VALIDA LOS LINKS------------//
const objA = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\pruebalinks.md'
  }
]
const objResolve = {
  status: 200,
  message: 'OK'
}
const objValidationA = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\pruebalinks.md',
    status: 200,
    message: 'OK'
  }
]

const objB = [
  {
    href: 'https://nodej000000s.org/es/',
    text: 'Node.js',
    file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\pruebalinks.md'
  }
]
const objRejectionB = [
  {
    href: 'https://nodej000000s.org/es/',
    text: 'Node.js',
    file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\pruebalinks.md',
    status: 500,
    message: 'FAIL'
  }
]
const objReject = {
  status: 500,
  message: 'FAIL'
}
const objC = [
  {
    href: 'https://www.lego.com/en-us/notfound',
    text: 'Link roto',
    file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\pruebalinks.md'
  }
]
const objValidationC = [
  {
    href: 'https://www.lego.com/en-us/notfound',
    text: 'Link roto',
    file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\pruebalinks.md',
    status: 404,
    message: 'FAIL'
  }
]
const objResolveC = {
  status: 404,
  message: 'FAIL'
}

//FUNCIÓN QUE VALIDA SI LOS LINKS ESTÁN 'OK' O 'FAIL'
describe('Función que valida si los links están OK o FAIL', () => {
  it('Debería ser una función', () => {
    expect(typeof validateLinks).toBe('function')
  })
  it('Debe retornar error cuando se invoca con un tipo de argumento errado', () => {
    expect(() => validateLinks()).toThrowError(TypeError)
    expect(() => validateLinks(0)).toThrowError()
    expect(() => validateLinks(null)).toThrowError()
  })
  test('mock promise resolution 200', async () => {
    fetch.mockResolvedValue(objResolve)
    return Promise.all(validateLinks(objA)).then((data) => {
      expect(data).toEqual(objValidationA)
    })
  })
  test('mock promise rejection', async () => {
    fetch.mockRejectedValue(objReject)
    return Promise.all(validateLinks(objB)).then((data) => {
      expect(data).toEqual(objRejectionB)
    })
  })
  test('mock promise resolution 404', async () => {
    fetch.mockResolvedValue(objResolveC)
    return Promise.all(validateLinks(objC)).then((data) => {
      expect(data).toEqual(objValidationC)
    })
  })
})
