const https=require('https')

https.get('https://jsonplaceholder.typicode.com/posts',resp=>{
let data="";

resp.on('data',piece=>{
    data+=piece;
});
    resp.on('end',()=>{
        let url=JSON.parse(data);
        console.log(url);
   
});

})
.on('error',err=>{
    console.log('Error:'+err.message)
})