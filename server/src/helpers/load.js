const path = require('path') ;

function loadModel(modelName){
    return require(path.join(__dirname , 'src' , 'models',  modelName+'.model')) ; 
} 


function loadController(ControllerName){
    return require(path.join(__dirname , 'src' , 'controller',  ControllerName+'.controller')) ; 
} 

module.exports = {
    loadModel ,
    loadController ,
}