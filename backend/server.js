const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const subjects = [
  "Sua energia",
  "Seu futuro",
  "Sua jornada",
  "Seu caminho",
  "Sua sorte",
  "Seu esforço",
  "Sua persistência",
  "Sua coragem"
]

const verbs = [
  "trará",
  "atrairá",
  "revelará",
  "mostrará",
  "proporcionará",
  "desbloqueará"
]

const complements = [
  "grandes oportunidades.",
  "mudanças positivas.",
  "novas conquistas.",
  "momentos especiais.",
  "muito sucesso.",
  "bons resultados.",
  "surpresas inesperadas.",
  "novos caminhos."
]

function generatePhrase() {
  const subject =
    subjects[Math.floor(Math.random() * subjects.length)]

  const verb =
    verbs[Math.floor(Math.random() * verbs.length)]

  const complement =
    complements[Math.floor(Math.random() * complements.length)]

  return `${subject} ${verb} ${complement}`
}

app.get("/frase", (req, res) => {
  res.json({
    mensagem: generatePhrase()
  })
})

app.listen(3000, () => {
  console.log("API rodando na porta 3000")
})

// teste github actions