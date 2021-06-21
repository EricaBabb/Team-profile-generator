const Manager = require('../libs/Manager.js');

test('creates a new team manager', () => {
    const manager = new Manager('Erica');

    expect(manager.name).toBe('Erica');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('ecamilebabb@gmail.com');
    expect(manager.officeNumber).toBe('305');
});