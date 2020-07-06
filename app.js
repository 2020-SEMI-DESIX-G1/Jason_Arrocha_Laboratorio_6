const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

const ESTUDIANTES = [
    {
        id: 1,
        nombre: "Jason Arrocha",
        edad: 23,
    },
    {
        id: 2,
        nombre: "Jose Knight",
        edad: 17,
    },
    {
        id: 3,
        nombre: "Ramon Arias",
        edad: 17,
    }
];

//Intermediario
app.use(bodyParser.json());


app.get('/api/estudiantes/',(req, res) =>{
 res.json({
     cantidad: ESTUDIANTES.length,
     estudiantes: ESTUDIANTES
    });
});

app.get('/api/estudiantes/:id',(req, res) =>{
    res.json(ESTUDIANTES[req.params.id]);
});

app.post('/api/estudiantes/',(req,res)=> {
    ESTUDIANTES.push(req.body);
    res.json(req.body);

});

app.put('/api/estudiantes/:id',(req,res)=> {
    ESTUDIANTES[req.params.id].nombre = "Xadier Arrocha";
    res.send(ESTUDIANTES[req.params.id]);

});

app.delete('/api/estudiantes/:id',(req,res)=> {
    console.log(req.params.id);
    ESTUDIANTES.splice(req.params.id);
    res.send(ESTUDIANTES)

});

app.listen(port, () => console.log('Example app listening at http:/localhost:${port}'));
