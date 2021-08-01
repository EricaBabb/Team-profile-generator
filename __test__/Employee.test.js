const Employee = require('../libs/Employee')

test('creates a new employee', () => {
  const employee = new Employee('Jennah', 2, 'email');

  expect(employee.name).toEqual('Jennah');
  expect(employee.id).toEqual(2);
  expect(employee.email).toEqual('email');
});

test('creates a new employee', () => {
  const employee = new Employee('Jennah', 2, 'email');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});