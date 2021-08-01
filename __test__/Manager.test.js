const Manager = require('../libs/Manager.js');

test('creates a new team manager', () => {
    const manager = new Manager('Erica', 1, 'email', 2);

    expect(manager.name).toEqual('Erica');
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual('email');
    expect(manager.officeNumber).toEqual(2);
});

test('creates a new team manager', () => {
    const manager = new Manager('Erica', 1, 'email', 2);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});