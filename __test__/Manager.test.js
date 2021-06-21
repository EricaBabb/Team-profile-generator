const Manager = require('../libs/Manager.js');

test('creates a new team manager', () => {
    const manager = new Manager();

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});