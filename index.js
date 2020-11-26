const express = require('express')
const app = express();
const request = require('request')


let remmer=[]
let jsonArray=[]
app.get('/getTimeStories',(req,res)=>{

   let value
   
   request({uri: "https://time.com"},
   function(error,result,body){

       let temp=body.split('</section>')
       let latest = temp[10].split('</h2>')
       
       let reg2='\href=(.*)</a>'
       for(let i=0; i< latest.length-1; i++){

           remmer[i]=latest[i].match(reg2);
           value = remmer[i][1].split('>')
           let jsonData = {};
           jsonData.title = value[1];
           jsonData.link = 'https://time.com'+value[0];  
           jsonArray.push(jsonData);
       }
           
        res.send(jsonArray)

   }
)

});


app.listen(5000); 