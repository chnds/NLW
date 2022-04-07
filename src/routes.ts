import express from 'express';

const routes = express.Router();

//get

//get
routes.get('/users',(request, response)=>{
   
    return response.json('Hello World');
});

routes.post('/users',(request, response)=>{
    const data = request.body;
 
    const user = {
         name: data.name,
         email: data.email,
    };
 
     return response.json(user);
 });

export default routes;