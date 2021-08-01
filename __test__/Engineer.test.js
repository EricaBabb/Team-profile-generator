const Engineer = require('../libs/Engineer.js');

test('creates a new engineer', () => {
    const engineer = new Engineer('Jorge', 3, 'email@email', 'Githubuser');

    expect(engineer.name).toEqual('Jorge');
    expect(engineer.id).toEqual(3);
    expect(engineer.email).toEqual('email@email');
    expect(engineer.github).toEqual('Githubuser');
});

test('creates a new engineer', () => {
    const engineer = new Engineer('Jorge', 3, 'email@email', 'Githubuser');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});