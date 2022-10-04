import express, { json, request, response } from "express";

const app = express()
app.use(json())


app.get("/ignite", (request, response) => {
    return response.json({message: "Hello world Ignite!"})
})

app.get("/pablo", (request, response) => {
    return response.json({message: "Hello world Sir, how can I help you?!"})
})



app.listen(8000, () => {
    console.log("O servidor está rodando no endereço: localhost:8000")
})
