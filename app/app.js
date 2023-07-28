import express from "express";

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get("/", (req, res, next) => {
  res.json(`VPS rodando Node.JS pelo Docker na porta ${port}`);
});
