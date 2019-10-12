var mongoose= require("mongoose");

var servidor = "localhost:27017";
var nombreBaseDatos = "jcweb_db";

class Database{
    constructor(){
        this.conectar();
    }
    conectar(){
        mongoose.connect(SET MONGOLAB_URI=`mongo "mongodb+srv://cmsjcwe2019-axr6r.mongodb.net/test"  --username JuanCarlos`)
        .then(()=>console.log(`se conecto a la base de datos ))
        .catch(error=>{
           console.error(JSON.stringify(error)) ;
        });
    }

}

module.exports = new Database();
