var http =require('http')
http.createServer(function(req,res){
    res.write("response from server")
}).listen(5000);
