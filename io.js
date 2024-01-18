const process = require("process");
// Pode passar e solicitar parametros ao usuário
console.log("Digite seu nome:");
process.stdin.on("data", (keyboard) => {
  process.stdout.write(`Nome: ${keyboard}`);
  process.exit();
});
