const Engineer = require('../libs/Engineer.js');

test('creates a new engineer', () => {
    const engineer = new Engineer('Jennah');

    expect(engineer.name).toBe('Jennah');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('jworthington03@comcast.net');
    expect(engineer.github).toBe('JennahW07');
});