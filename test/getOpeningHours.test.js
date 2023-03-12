const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se retorna um objeto contendo todos os dias em inglês, caso não seja passado nenhum parâmetro', () => {
    // const expetcted = getOpeningHours();
    expect(getOpeningHours()).toEqual({ Friday: { close: 8, open: 10 }, Monday: { close: 0, open: 0 }, Saturday: { close: 10, open: 8 }, Sunday: { close: 8, open: 8 }, Thursday: { close: 8, open: 10 }, Tuesday: { close: 6, open: 8 }, Wednesday: { close: 6, open: 8 } });
  });
  it('Verifica se ao passar parâmetros de horários que o Zoo ta fechado, retorna a string "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Verifica se ao passar parâmetros de horários que o Zoo ta aberto, retorna a string "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se retorna a mensagem "The day must be valid. Example: Monday", caso o parâmetro seja inválido', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });
  it('Verifica se retorna a mensagem "The abbreviation must be \'AM\' or \'PM\'", caso o parâmetro seja inválido', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica se retorna a mensagem "The hour should represent a number", caso o parâmetro seja inválido', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError('The hour should represent a number');
  });
  it('Verifica se retorna a mensagem "The minutes should represent a number", caso o parâmetro seja inválido', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError('The minutes should represent a number');
  });
});
