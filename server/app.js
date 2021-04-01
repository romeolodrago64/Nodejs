let express = require('express');

const path = require('path');

let app = express();

app.get('/pagina2',function(req,res){
    res.sendFile(path.join(__dirname,'views/index.html'));
});

app.get('/',function(req,res){
    res.send("<h1>Hello word</h1>");
});
app.get('/pagina1',function(req,res){
    res.send("<h1>Pagina 1</h1>")
})
app.listen(3000,function(){
    console.log("Server attivo sulla porta 3000");
});