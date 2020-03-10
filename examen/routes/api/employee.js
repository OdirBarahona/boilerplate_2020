var express = require('express');
var router = express.Router();

function initEmployee(db) {
  var empModel = require('./employeeModel')(db);

  //rutas a implementar
  // metodo     ruta                     body
  /*
      GET       /all
      GET       /byid/:id
      GET       /bycompany/:company
      GET       /byagerange/:min/:max
      GET       /bytag/:tag
      POST      /addtag/:id              tag
      DELETE    /delete/:id
      POST      /makeolder               age
   */

  router.get('/docs/all', (req, res, next) => {
    
	empModel.getAll((err, docs)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(docs);
    });
	
	/*
    empModel.xyz( (err, docs)=>{
      return res.status(200).json(docs);
    });
    */
  });// all
  
  router.get('/byid/:id',(req, res)=>{
    var id =  req.params.id ;
    empModel.getById(id, (err, docs)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(docs);
    });// getBYId
});

  
  return router;
}

router.get('bycompany/:company',(req, res)=>{
    var id =  req.params.id ;
    empModel.getById(id, (err, docs)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(docs);
    });// bycompany/:company
});


router.post('/addtag/:id ', (req, res)=>{
  var datosEnviados = req.body;
  // var newUser = userModel.addNew(datosEnviados);
  // return res.status(200).json(newUser);
  empModel.addNew(datosEnviados, (err, addedDoc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({error:'error'});
    }
    return res.status(200).json(addedDoc);
    }); //addNew
}); // post users/new


router.delete('/delete/:id', (req, res)=>{
  var id = req.params.id;
  empModel.deleteByCode(id, (err, deletedDoc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"error"});
    }
    return res.status(200).json(deletedDoc);
  }); //  deleteByCode
});//delete


module.exports = initEmployee;
