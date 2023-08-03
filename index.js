const express = require("express")
const sever = express();

sever.get('/',(req,res)=>{
    res.send('노드서버 엔트리 포인트 성공적 노출')
})

server.listen(8080,()=>{
    console.log("localhost:8080 서버구동 완료")
})