const googleDatabaseSerieA = [
    'Sport Recife',
    'flamengo.com',
    'fluminense.org',
    'gremio.com',
    'fortaleza.com.br',
    'saopaulofc.com.br'
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter(football => {
        return football.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0, 2) : matches;
}

// console.log(googleSearch('s', googleDatabaSerieA));

module.exports = googleSearch;

