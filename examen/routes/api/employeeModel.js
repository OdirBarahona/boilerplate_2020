var ObjectID = require('mongodb').ObjectID;

function employeeModel(db){
  var lib = {};
  var empColl = db.collection('emps');
  
  lib.getEmployees = (handler)=>{
	  
      empColl.find({}).toArray(handler);
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesById = (id, handler) => {
  
	
	var query = { "_id": new ObjectID(id) };
    empColl.findOne(
      query,
      (err, doc) => {
        if (err) {
          return handler(err, null);
        }
        return handler(null, doc);
      }
    ); 
  }

	lib.getEmployeesById.comparePswd = (hash, raw)=>{
    return bcrypt.compareSync(raw, hash);
  }
	
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByCompany = (company, handler) => {
    
	
	var query = {"usercompany":Company};
    var projection = { "usercompany": 1, "userPswd": 1, "userCompleteName":1};
    lib.getEmployeesById.findOne(
      query,
      {"projection":projection},
      (err, user)=>{
        if(err){
          return handler(err,null);
        }
        return handler(null, doc);
      }
    )
  }
	
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByAgeRange = (ageLowLimit, ageHighLimit, handler) => {
   
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByTag = (tag, handler) => {
	
	var query = {"usertag":tag};
    var projection = { "usertag": 1, "userPswd": 1, "userCompleteName":1};
   empColl.findOne(
      query,
      {"projection":projection},
      (err, user)=>{
        if(err){
          return handler(err,null);
        }
        return handler(null, doc);
      }
    )
  }
    return handler(new Error("No Implementado"), null);
  }

  lib.addEmployeeATag = ( tag, id, handler) => {
     var query = { "_id": new ObjectID(id) };
    empColl.findOne(
      query,
      (err, doc) => {
        if (err) {
          return handler(err, null);
        }
        return handler(null, doc);
      }
    ); //findOne
  }

  seguridadModel.comparePswd = (hash, raw)=>{
    return bcrypt.compareSync(raw, hash);
  }
    return handler(new Error("No Implementado"), null);
  }

  lib.removeEmployee = (id, handler) => {
    
	var query = {"_id": new ObjectID(id)};
    empColl.deleteOne(
      query,
      (err, rslt)=>{
        if(err){
          return handler(err, null);
        }
        return handler(null, rslt.result);
      }
    ); //deleteOne
  }
  
    return handler(new Error("No Implementado"), null);
  }

  lib.increaseAgeToAll = (ageDelta, handler) => {
    //Implementar
    //Se requiere modificar todos los documentos de la colección
    // incrementando age por la cantidad de ageDelta $inc
    return handler(new Error("No Implementado"), null);
  }
  return lib;
}

module.exports = employeeModel;
