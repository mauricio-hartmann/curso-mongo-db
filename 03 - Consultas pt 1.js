db.estados.find();

db.estados.find().pretty();

db.estados.findOne({ sigla: 'RJ' });

db.estados.find({
    $or: [{ sigla: 'RJ' }, { sigla: 'AC' }]
});

db.estados.find({ populacao: { $exists: true } });

db.estados.find().skip(1).limit(2);

db.estados.count();

db.estados.find(
    { sigla: 'SP' },
    { nome: 1, sigla: 1 }
);

db.estados.find(
    { sigla: 'SP' },
    { nome: 1, sigla: 1, _id: 0 }
);

db.estados.find(
    { sigla: 'SP' },
    { "cidades.nome": 1, _id: 0 }
)
