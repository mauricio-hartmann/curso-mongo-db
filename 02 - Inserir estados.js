db.estados.insert({
    nome: 'Acre',
    sigla: 'AC',
    regiao: 'Norte'
});

db.estados.save({
    nome: 'Alagoas',
    sigla: 'AL',
    regiao: 'Nordeste',
    populacao: 3322000
});

db.estados.find();

db.estados.find().pretty();

db.estados.insert({
    nome: 'Rio de Janeiro',
    sigla: 'RJ',
    regiao: 'Sudeste',
    cidades: [
        { nome: 'Niterói', area: 133.9, populacao: 487562 }
    ]
});

db.estados.find();

db.estados.insert({
    nome: 'São Paulo',
    sigla: 'SP',
    regiao: 'Sudeste',
    cidades: [
        { _id: new ObjectId(), nome: 'Campinas', area: 795.7, prefeito: 'Jonas Donizette', populacao: 1081000 },
        { _id: new ObjectId(), nome: 'Guarulhos', populacao: 1325000 },
        { _id: new ObjectId(), nome: 'Campinas', distanciaCapital: 87, populacao: 644919 },
    ]
});

db.estados.find();