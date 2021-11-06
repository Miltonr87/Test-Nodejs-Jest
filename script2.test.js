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

///////////////////////////// USANDO O JEST EM ASSÍNCRONOS /////////////////////////////////////

it('getPeople returns count and results', () => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 87,
                results: [0,1,2,3,4,5] 
            })
    }))
    expect.assertions(4) // procura garantir que os dois expects sejam chamados
    return swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1)
        // aqui acima testa o tamanho do array se for 1, se for 0 ele falha
        expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people/')
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5)
    });
})

// algumas lógicas para montagem dos testes pode ser encontrado no repositório Jest-Cheat-Sheet

