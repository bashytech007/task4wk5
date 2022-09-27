const https=require('https');
let body = JSON.stringify({
    
    id: 101,
    title: 'tick',
    body: 'bar',
    userId: 1
  }
  
);

const options = {
hostname: 'jsonplaceholder.typicode.com',
path: '/posts',
// port: 443,
method: 'PUT',
headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body)
  }
}
https
.request(options, res => {
let data = ""
res.on("data", d => {
  data += d
})
res.on("end", () => {
  console.log(data)
})
})
.on("error", console.error)
.end(body)