import { db } from '../db.js';

export const getEstudantes = (_, res) => {
  const q = 'SELECT * FROM estudantes';

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// export const addEstudante = (req, res) => {
//     const q = "INSERT INTO estudantes (`nome`, `email`, `fone`, `data_nasc`) VALUES(?)"

//     const values = [ 
//         req.body.nome,
//         req.body.email,
//         req.body.fone,
//         req.body.data_nasc,
        
//     ]

//     db.query(q, [values], (err) => {
//         if(err) return res.json(err)

//         return res.status(200).json("Estudante criado com sucesso!")
//     })
// }
export const addEstudante = (req, res) => {
  const { nome, email, fone, data_nasc } = req.body;

  const checkQuery = "SELECT * FROM estudantes WHERE email = ?";

  db.query(checkQuery, [email], (err, results) => {
      if (err) {
          return res.status(500).json({ error: "Erro ao verificar duplicidade: " + err.message });
      }

      if (results.length > 0) {
          return res.status(409).json({ message: "Estudante já cadastrado com esse email." });
      }

      const insertQuery = "INSERT INTO estudantes (`nome`, `email`, `fone`, `data_nasc`) VALUES (?)";
      const values = [nome, email, fone, data_nasc];

      db.query(insertQuery, [values], (err) => {
          if (err) {
              return res.status(500).json({ error: "Erro ao inserir estudante: " + err.message });
          }

          return res.status(200).json("Estudante criado com sucesso!");
      });
  });
};

export const updateEstudante = (req, res) => {
    const q = 
    "UPDATE estudantes SET `nome` = ?, `email` = ?, `fone` = ?, `data_nasc` = ? WHERE `id` = ?"

    const values = [
      req.body.nome,
      req.body.email,
      req.body.fone,
      req.body.data_nasc,
      
    ]
    db.query(q, [...values, req.params.id], (err) => {
      if(err) return res.json(err)

      return res.status(200).json("Estudante atualizado com sucesso!")
  })
}

export const deleteEstudante = (req, res ) => {
   const q =  "DELETE FROM estudantes WHERE `id` = ?"

   db.query(q, [req.params.id], (err) => {
    if(err) return res.json(err)

      return res.status(200).json("Estudante deletado com sucesso.")
   })
}

