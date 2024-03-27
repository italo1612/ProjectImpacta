import { db } from '../db.js';

export const getEstudantes = (_, res) => {
  const q = 'SELECT * FROM estudantes';

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addEstudante = (req, res) => {
    const q = "INSERT INTO estudantes (`nome`, `email`, `fone`, `data_nasc`) VALUES(?)"

    const values = [ 
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nasc,
        
    ]

    db.query(q, [values], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("Estudante criado com sucesso!")
    })
}
