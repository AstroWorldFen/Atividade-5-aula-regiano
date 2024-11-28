const request = require('supertest');  // Certifique-se de que o 'request' está sendo importado no início do arquivo

test('Verificando resposta de múltiplas pessoas', async () => {
  const response = await request('https://swapi.dev/api')  // URL correta da API
    .get('/people/');  // Endpoint para obter lista de pessoas

  expect(response.status).toBe(200);  // Verifica se o status é 200

  // Verifica se o corpo da resposta contém uma lista de pessoas
  expect(response.body.results).toBeDefined();
  expect(response.body.results.length).toBeGreaterThan(0);  // Verifica se tem ao menos 1 personagem

  // Verifica se cada item da lista de pessoas possui um nome
  response.body.results.forEach(person => {
    expect(person).toHaveProperty('name');
  });
});

  
  

  










  
  