const {esAbsoluta,rutaExiste} = require('../backend/index.js');

//VALIDAR SI ES UNA RUTA ABSOLUTA
describe('esAbsoluta', () => {
  it('should be a function', () => {
    expect(typeof esAbsoluta).toBe('function');
  });
  it('should return true if the path is absolute', () => {
    expect(esAbsoluta('./pruebalinks.md')).toBe(true);
  });
  it('should return false if the path is not absolute', () => {
    expect(esAbsoluta('./pruebalinks2.md')).toBe(false);
  });
});

//VALIDAR SI LA RUTA EXISTE
describe('rutaExiste', () => {
  it('should be a fuction', () => {
    expect(typeof rutaExiste).toBe('function');
  });
  it('should return true if the path exists', () => {
    expect(rutaExiste('./pruebalinks.md')).toBe(true);
  });
  it('should return false if the path does not exist', () => {
    expect(rutaExiste('./pruebalinks2.md')).toBe(false);
  });
});


/* describe('cipher', () => {

    it('should be an object', () => {
      expect(typeof cipher).toBe('object');
    });
  
    describe('cipher.encode', () => {
  
      it('should be a function', () => {
        expect(typeof cipher.encode).toBe('function');
      });
  
      it('should throw TypeError when invoked with wrong argument types', () => {
        expect(() => cipher.encode()).toThrow(TypeError);
        expect(() => cipher.encode(0)).toThrow(TypeError);
        expect(() => cipher.encode(null, [])).toThrow(TypeError);
        expect(() => cipher.encode(0, 0)).toThrow(TypeError);
      });
  
      it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
        expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
      }); */