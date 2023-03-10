const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se HandlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verifica se mão passar parâmetros para a função HandlerElephants retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Verifica se retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verifica se retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica se retorna a popularidade dos elefantes', () => {
    const popularityTest = 5;
    expect(handlerElephants('popularity')).toBe(5);
    expect(popularityTest).toBeGreaterThanOrEqual(5);
  });
  it('Verifica se retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('Verifica se passando por argumento um objeto vazio ({}) deve retornar a string "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('teste')).toBeNull();
  });
});
