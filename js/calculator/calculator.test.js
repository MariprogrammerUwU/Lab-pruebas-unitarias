const calculator = require('./calculator.js');

test('adds 1 + 2 to equal 3', () => { 
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test("la divicion entre 10 y 5", () => {
  expect(calculator.divicion(10, 5)).toBe(2);
});

//este test es para saber los resultados de las pruebas unitarias vamos a crear uno para la funcion divide
test("la divicion entre 30 y 15", () => { // en esta linea de codigo lamamos test y escribimos un mensaje con los valores que deseamos agregar, despues llamamos a una funcion flecha para que podamos escribir los siguientes parametros 
  expect(calculator.divicion(30, 15)).toBe(2);
});

test("la divicion entre 30 y 15", () => {
  expect(calculator.divicion(30, 15)).toBe(2);
});

test("la multiplicacion entre 85 y 2", () => {
  expect(calculator.multiply(85, 2)).toBe(170);
});

test("la multiplicacion entre 200 y 19", () => {
  expect(calculator.multiply(200, 19)).toBe(3800);
});

