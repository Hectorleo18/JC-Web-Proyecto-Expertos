var express = require("express");
var router = express.Router();
var mongoose= require("mongoose");
var bodyParser = require("body-parser");

var image= require("../models/imagen");

//peticion para guardar una categoria//
router.post("/subir-img", function(req, res){
    const {nombre} = req.file.originalname;
    //console.log(req.file.originalname);
    var p = new image({
        nombre
        
    });

    //res.redirect()
    p.save()
    .then(obj=>{
        res.send(obj);
    })
    .catch(error=>{
        res.send(error);
    });

});

/*
router.get("/", function(req,res){
    categoria.find()
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});

//Obtener una categoria en particular
router.get("/:id",function(req,res){
    categoria.find({_id:req.params.id})
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});


//Peticion para actualizar contenido de una categoria
router.put("/:id",function(req,res){
    categoria.update(
        {_id:req.params.id},
        {
            $set:{
            nombre:req.body.nombre
              
         }
        }
    ).then(result=>{
        res.send(result);
    })
    .catch(error=>{
        res.send(error);
    });
});


//Peticion para eliminar una categoria
router.delete("/:id",function(req, res){
    categoria.remove({_id:req.params.id})
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
});*/



module.exports = router;