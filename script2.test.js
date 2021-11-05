const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people on API', (done)=> {
    expect.assertions(1) // boa forma de garantir que o código assíncrono funciona como esperado
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
        done()          // incluído com o assertions fechando o recebimento do assíncrono
    })
});

it('calls swapi to get people on API with Promises', () => {
    expect.assertions(2)
    // substituindo o Done pelo return
    return swapi.getPeoplePromise(fetch).then(data => { 
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5)
    })
});

// algumas lógicas para montagem dos testes pode ser encontrado no repositório Jest-Cheat-Sheet

