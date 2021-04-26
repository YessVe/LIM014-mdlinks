const {rutaExiste,esAbsoluta,getAbsolute,pathExtension,} = require('../backend/index.js');

//VALIDAR SI ES UNA RUTA ABSOLUTA
describe('Función que valida si la ruta es absoluta', () => {
  it('debería ser una función', () => {
    expect(typeof esAbsoluta).toBe('function');
  });
  it('debería retornar TRUE si la ruta es absoluta', () => {
    expect(esAbsoluta("D:\\GitHub\\LIM014-mdlinks\\README.md")).toBe(true);
  });
  it('debería retornar FALSE si la ruta es relativa', () => {
    expect(esAbsoluta("../README.md")).toBe(false);
  });
  /* it('debería retornar TypeError cuando invoco un tipo de argumento incorrecto', () => {
    expect(() => esAbsoluta()).toThrow(TypeError);
    expect(() => esAbsoluta(0)).toThrow(TypeError);
    expect(() => esAbsoluta(null, [])).toThrow(TypeError);
    expect(() => esAbsoluta(0, 0)).toThrow(TypeError);
  }); */
});

//VALIDAR SI LA RUTA EXISTE
describe('Función que valida si la ruta existe', () => {
  it('debería ser una función', () => {
    expect(typeof rutaExiste).toBe('function');
  });
  it('debería retornar TRUE si la ruta existe', () => {
    expect(rutaExiste('D:\\GitHub\\LIM014-mdlinks\\README.md')).toBe(true);
  });
  it('debería retornar FALSE si la ruta no existe', () => {
    expect(rutaExiste('D:\\GitHub\\LIM014-mdlinks\\README2.md')).toBe(false);
  });
  it('debería retornar TRUE si la ruta existe', () => {
    expect(rutaExiste('README.md')).toBe(true);
  });
  it('debería retornar FALSE si la ruta no existe', () => {
    expect(rutaExiste('../README2.md')).toBe(false);
  });
});

//VALIDAR QUE LA RUTA RELATIVA SE CONVIERTA EN ABSOLUTA
describe('Función que convierte una ruta relativa en absoluta', () => {
  const a = "D:\\GitHub\\LIM014-mdlinks\\README.md";
  const b = "README.md";
  it('debería ser una función', () => {
    expect(typeof getAbsolute).toBe('function');
  });
  it('debería convertir la ruta relativa en absoluta', () => {
    expect(getAbsolute(b)).toEqual(a);
  });
  it('no debería convertir una ruta absoluta, se debe quedar igual', () => {
    expect(getAbsolute(a)).toEqual(a);
  });
});


/* describe('cipher', () => {

    it('should be an object', () => {
      expect(typeof cipher).toBe('object');
    });
  
    describe('esAbsoluta', () => {
  
      it('should be a function', () => {
        expect(typeof esAbsoluta).toBe('function');
      });
  
      it('should throw TypeError when invoked with wrong argument types', () => {
        expect(() => esAbsoluta()).toThrow(TypeError);
        expect(() => esAbsoluta(0)).toThrow(TypeError);
        expect(() => esAbsoluta(null, [])).toThrow(TypeError);
        expect(() => esAbsoluta(0, 0)).toThrow(TypeError);
      });
  
      it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
        expect(esAbsoluta(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
      });
      
        const a = 'D:\\GitHub\\LIM014-mdlinks\\practica\\prueba_directorio\\CARP CON LINKS.md';
  const b = 'practica\prueba_directorio\CARP CON LINKS.md';
      
      */