const fs = require('fs')
const express = require('express')

const kodemia =JSON.parse(fs.readFileSync('kodemia.json'))

const server = express()
server.use(express.json()) //Middleware

//endpoints: la combinación de un método y una ruta
// método: Métoos HTTP, GET, POST, DELETE, PUT, PATCH
// ruta: strings que denotan recursos en nuestro servidor.

server.get('/', (request,response)=>{
    response.json({
        message: 'My first API is running'
    })
})

//Section koders 

//query parameters
//http://servidor/ruta/del/recurso?
//GET http://api.kodemia.mx/koders?limit=66

// Querry  parameters
server.get('/koders',(request,response) => {
    const{ limit=10} =request.query
    response.json({
        message:'All the koders',
        data:{
            koders:kodemia.koders.slice(0,parseInt(limit))
            
        }
})
})

server.post('/koders',(request,response) => {
    const { name, generation } = request.body
    kodemia.koders.push({
        name,
        generation
    })
    response.json({
        message:'new koder added',
        data:{
            koder:{
                name,
                generation
            }
        }
    })
})

// server.post('/koders',(request,response) => {
    
//     const newKoder = {
//         name:request.body.name,
//         generation:request.body.generation
//     }
//     kodemia.koders.push(newKoder)
//     response.json({
//         message:'new koder added',
//         data:{
//             koder:newKoder
//         }
//     })
// })

//Section a-Mentors
server.get('/amentors',(request,response)  => {
    response.json({
        message:'All the aMentors',
        data:{
            aMentors:kodemia.aMentors
        }
    })
})

server.post('/amentors',(request,response)  => {
    const newMentor = {
        name:request.body.name,
        course:request.body.course,
        generation:request.body.generation
    }
    kodemia.aMentors.push(newMentor)
    response.json({
        message:'new aMentor added',
        data:{
            aMentor:newMentor
        }
    })

})

// uri parameters
// GET /koders/[name]
//GET /koders/Charles -> name=charles

// server.get('/koders/:name',(request,response)=>{
//     response.json({
//         name:request.params.name
//     })
// })


//Practica
//Un endpoit que reciba el  indice  de un koder  y regresa  un  koder que se  encuentra en ese ídice
//GET  /koders/:indice-> indice = 0  ... kodemia.koders[0]
server.get('/koders/:index',(request,response)=>{
    const {index} =request.params
    response.json({
        message:'Index Koder',
        koder:  kodemia.koders[index]
    })

})



server.listen(8081,()=>{
    console.log('Server is running')
})










//200.1.2.10
///Users/gabrielaelviracamarilloluna/Documents/kodemia/septima-gen/my-firts-api
