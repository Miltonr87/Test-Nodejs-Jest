const googleSearch = require('./script');

dbMock = [
    'Pastrano',
    'Volta Redonda',
    'Esquerdinha',
    'Zueiro FC',
    'Peladeiros',
    'Madrugada a Dentro FC'
]

it('this is a test', () => {
    expect('hello').toBe('hello');
});

it('is searching google', () => {
    expect(googleSearch('caveira', dbMock)).toEqual([]);
    expect(googleSearch('Pela', dbMock)).toEqual(['Peladeiros']);
})


// para usar o dabatabase precisamos usar uma injeção de dependência com um Mock, nesse caso de times inventados.

// Funções Expects -> https://jestjs.io/docs/expect 

