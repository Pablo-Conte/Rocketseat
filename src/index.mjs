import express, { json, request, response } from "express";

const app = express()
app.use(json())


app.get("/ignite", (request, response) => {
    return response.json({message: "Hello world Ignite!"})
})

app.get("/pablo", (request, response) => {
    return response.json({message: "Hello world Sir, how can I help you?!"})
})

app.get("/courses", (request, response) => {
    return response.json({
        "Curso 1": "Informática",
        "Curso 2": "Eletromecânica",
        "Curso 3": "Eletrotécnica",
        "Curso 4": "Agronomia"
    })
})

app.post("/courses", (request, response) => {
    return response.json({
        "Curso 1": "Informática",
        "Curso 2": "Eletromecânica",
        "Curso 3": "Eletrotécnica",
        "Curso 4": "Agronomia",
        "Curso 5": "Medicina"
    })
})

app.put("/courses/:id", (request, response) => {
    return response.json({
        "Curso 6": "Informática",
        "Curso 2": "Eletromecânica",
        "Curso 3": "Eletrotécnica",
        "Curso 4": "Agronomia",
        "Curso 5": "Medicina"
    })
})

app.patch("/courses/:id", (request, response) => {
    return response.json({
        "Curso 6": "Informática",
        "Curso 7": "Eletromecânica",
        "Curso 3": "Eletrotécnica",
        "Curso 4": "Agronomia",
        "Curso 5": "Medicina"
    })
})

app.delete("/courses/:id", (request, response) => {
    return response.json({
        "Curso 6": "Informática",
        "Curso 7": "Eletromecânica",
        "Curso 4": "Agronomia",
        "Curso 5": "Medicina"
    })
})



app.listen(8000, () => {
    console.log("O servidor está rodando no endereço: localhost:8000")
})
