// const fs = require('fs')

// fs.readFile('./data.json', 'utf8', (err, data)=>{
//     if(!err) {
//         let parseWorkers = JSON.parse(data)
//         parseWorkers.sort((a,b)=>a.age-b.age)
//         let len = Math.floor(parseWorkers.length/2)
//         fs.writeFile('./result.txt', JSON.stringify(parseWorkers[len]), (err)=>{
//             if(err){
//                 console.log(err)
//             }
//         })
//     } 
//     else {
//         console.log(err)
//     }
// })
const fs = require('fs')
const express = require('express')
let app = express()
const HOST = 5000

fs.readFile('./data.json', 'utf8', (err, data)=>{
    if (err){
        console.log(err)
    }
    else {
        let workers = JSON.parse(data)
        app.get('/workers', (req, res)=> {
            res.json(workers)
        })
    }
})



app.listen(HOST, (err)=>{
    if (err) {
        console.log(err)
    } 
    else {
        console.log('localhost:', HOST)
    }

})