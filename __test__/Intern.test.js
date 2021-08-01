const Intern = require('../libs/Intern.js');

test('creates a new intern', () => {
    const intern = new Intern('Jennifer', 4, 'email@com', 'Purdue');

    expect(intern.name).toEqual('Jennifer');
    expect(intern.id).toEqual(4);
    expect(intern.email).toEqual('email@com');
    expect(intern.school).toEqual('Purdue');
});

test('creates a new intern', () => {
    const intern = new Intern('Jennifer', 4, 'email@com', 'Purdue');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});