const express = require("express")
const app = express();

let dados = []

app.get("/sensor", (req,res) =>{
    const {temp, hum} = req.query;

    if(!temp || !hum){
        return res.status(400).send
        ("Dados Inválidos");
    }

    const leitura = {
        temperatura: temp,
        umidade: hum,
        data: new Date()
    };

    dados.push(leitura);

    console.log(leitura);

    response.send("OK");
    
});

app.get("/dados", (require, response) =>{
    response.json(dados)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`);
})