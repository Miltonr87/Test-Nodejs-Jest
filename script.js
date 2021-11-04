const googleDatabase = [
    'sportrecife.com',
    'flamengo.com',
    'fluminense.org',
    'gremio.com',
    'fortaleza.com.br',
    'saopaulofc.com.br'
];

const googleSearch = (searchInput) => {
    const matches = googleDatabase.filter(football => {
        return football.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0, 2) : matches;
}

console.log(googleSearch('s'));

