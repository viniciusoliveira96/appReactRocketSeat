import express, { request, response } from 'express';

const app = express();

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com id 5

// Request Param: Parametros que vem na propria rota que identificam um recurso
// Query Param: Parametros que vem na propria rota geralmente opcionais para filtros, paginação
// Request Bodys: 

const users = [
    'Diego', // 0
    'Marina', // 1
    'Vinicius', // 2
    'Daniel', // 3
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
  const user = {
      name: 'Diego',
      email: 'diego@rocketseat.com.br'
  };

  return response.json(user)
});

app.listen(3333)