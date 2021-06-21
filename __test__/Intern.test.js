const Intern = require('../libs/Intern.js');

test('creates a new intern', () => {
    const intern = new Intern('Jorge');

    expect(intern.name).toBe('Jorge');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('jhernandez07@gmail.com');
    expect(intern.school).toBe('IUPUI');
});