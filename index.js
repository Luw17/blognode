const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express();

//configuração do handlebars
//template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions: {allowProtoPropertiesByDefault: true,allowProtoMethodsByDefault: true}}))
app.set("view engine","handlebars")

//configuração do body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//configuração da pasta public para o css
app.use(express.static('public'));

//rotas
app.get('/',function(req,res){
    res.render("home")
})

app.listen(8080,function(){
    console.log("o Servidor esta rodando na url http://localhost:8080")
})