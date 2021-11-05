const googleSearch = require('./script');

dbMock = [
    'Pastrano',
    'Volta Redonda',
    'Esquerdinha',
    'Zueiro FC',
    'Peladeiros',
    'Madrugada a Dentro FC'
]

describe('GoogleSearch Test', () => {
    it('This is a test', () => {
        expect('hello').toBe('hello');
    });
    
    it('Is searching google', () => {
        expect(googleSearch('caveira', dbMock)).toEqual([]);
        expect(googleSearch('Pela',  dbMock)).toEqual(['Peladeiros']);
    })
    
    it('Work with undefined and null input', ()=> {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })
    
    it('Does not return more than 2 matches of FC', ()=> {
        expect(googleSearch(' FC', dbMock).length).toEqual(2);
    })
})

// para usar o dabatabase precisamos usar uma injeção de dependência com um Mock, nesse caso de times inventados.

// Funções Expects -> https://jestjs.io/docs/expect 

