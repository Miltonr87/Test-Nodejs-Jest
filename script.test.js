const { expect } = require('@jest/globals');
const googleSearch = require('./script');

googleDatabaseMock = [
    'Pastrano',
    'Volta Redonda',
    'Esquerdinha',
    'Zueiro FC',
    'Peladeiros',
    'Madrugada a Dentro FC'
]

it('this is a test', () => {
    expect('hello').toBe('noo');
});


// para usar o dabatabase precisamos usar uma injeção de dependência com um Mock, nesse caso de times inventados.

// Funções Expects -> https://jestjs.io/docs/expect 

