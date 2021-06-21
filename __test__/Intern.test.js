const Intern = require('../libs/Intern.js');

test('creates a new intern', () => {
    const intern = new Intern();

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});