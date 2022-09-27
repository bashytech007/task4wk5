const https=require('https');
let body = JSON.stringify({
    
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1
  }
  
);

const options = {
hostname: 'jsonplaceholder.typicode.com',
path: '/posts',
// port: 443,
method: 'POST',
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