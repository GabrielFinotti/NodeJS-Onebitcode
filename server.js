// Imports
const http = require("http");
//Creando o servidor
const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.statusCode = 200;
  res.end("<h1>Conectado</h1>");
});

server.listen(3000, () => {
  console.log("Servidor Ativo!");
});
