const express = require('express');
const format = require('date-format');
const app = express();

const PORT = process.env.PORT || 4000 ;

app.get("/", (req,res, next)=>{
    res.status(200).send("<h1>HELLO</h1>");
});

app.get("/api/v1/instagram", (req, res, next)=>{
    const instaSocial = {
        username:"anmol._2001",
        followers: 256,
        follows: 300,
        data: [format('hh:mm:ss.SSS', new Date()), format('dd:MM:yyyy', new Date())]
    };

    res.status(200).json({
        success: true,
        instaSocial
    });
});


app.get("/api/v1/facebook", (req, res, next)=>{
    const instaSocial = {
        username:"anmol saxena",
        followers: 256,
        follows: 300,
        data: [format('hh:mm:ss.SSS', new Date()), format('dd:MM:yyyy', new Date())]
    };

    res.status(200).json({
        success: true,
        instaSocial
    });
});


app.get("/api/v1/linkedin", (req, res, next)=>{
    const instaSocial = {
        username:"anmol saxena",
        followers: 1000,
        follows: 300,
        data: [format('hh:mm:ss.SSS', new Date()), format('dd:MM:yyyy', new Date())]
    };

    res.status(200).json({
        success: true,
        instaSocial
    });
});

app.get("/api/v1/:token/:id", (req, res, next)=>{
    res.status(200).json({
        success: true,
        token: req.params.token,
        id: parseInt(req.params.id),
        type1: typeof(req.params.token),
        type2: typeof(req.params.id),
    });
});

app.listen(PORT, ()=>{
    console.log(`Running on port : ${PORT}`);
});