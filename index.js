const express=require('express');
const bodyParser=require('body-parser');
var fs=require('fs');
var path=require('path');
const cors=require('cors');

var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.get('/',(req,res)=>{
    var readQuiz=fs.readFileSync("data/allQuizes.json",'utf8');
    var jsonContent=JSON.parse(readQuiz);
    var titles=[];
    for(var i=0;i<jsonContent.length;i++){
        titles[i]=jsonContent[i]["title"];
    }
    res.send(titles);
});

app.get('/quiz',(req,res)=>{
    var readQuiz=fs.readFileSync("data/allQuizes.json",'utf8');
    var jsonContent=JSON.parse(readQuiz);
    
    res.send(JSON.stringify(jsonContent));
})

app.post('/quiz',(req,res)=>{
    var sentQuiz=req.body;
    var readQuiz=fs.readFileSync('data/allQuizes.json','utf8');
    var jsonContent=JSON.parse(readQuiz);
    if(jsonContent.length>0){
        sentQuiz["id"]=jsonContent[jsonContent.length-1]["id"]+1;
    }
    jsonContent.push(sentQuiz);
    var jsonString=JSON.stringify(jsonContent);
    fs.writeFileSync("data/allQuizes.json",jsonString);
    res.send('Quizes is updated');
});

app.get('/quiz/:id',(req,res)=>{
    var readQuiz=fs.readFileSync('data/allQuizes.json','utf8');
    var jsonContent=JSON.parse(readQuiz);
    
    var targetQuiz
    for(var i=0;i<jsonContent.length;i++){
        if(jsonContent[i]["id"]===parseInt(req.params.id)){
            targetQuiz=jsonContent[i];
            break;
        }
}
    res.send(targetQuiz);
}); 





app.get('/titles', function (req, res) {
    var readQuiz = fs.readFileSync("data/allQuizes.json", 'utf8');
    var jsonContent = JSON.parse(readQuiz);
    var titles = "[";
    for (var i = 0; i<jsonContent.length; i++) {
      if (i < jsonContent.length -1)
        titles += "\"" + jsonContent[i]["title"] + "\"" + ", ";
      else
        titles += "\"" + jsonContent[i]["title"] + "\"";
    }
    titles += "]";
    res.send(titles);
  });

app.listen(3000,()=>{
    console.log('listening');
});