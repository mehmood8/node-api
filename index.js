const http = require('http');
const express = require('express');
const app =express();

const hostname = '0.0.0.0';
const port = 3000;


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/department/',function(req,res){
    res.set('Access-Control-Allow-Origin', 'http://0.0.0.0:4200');
    res.json([{
      DepartmentId:1,
      DepartmentName:'IT',
        
    },
  {
    DepartmentId:2,
    DepartmentName:'Sales'
  },
  
  {
    DepartmentId:3,
    DepartmentName:'Markeeting'
  }
  
  ]);
  });