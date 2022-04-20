const express = require('express')
const app = express();
const cors = require('cors')
const port =process.env.PORT || 5000;
app.use(cors())
app.use(express.json)

app.get('/', (req, res)=>{
    res.send("Look mama i can Node now there")
})
 const users = [
    {id:1,name: 'John',email: 'jhon@gamil.com', phone: '123-456'},
    {id:2,name: 'John',email: 'jhon@gamil.com', phone: '123-456'},
    {id:3,name: 'John',email: 'jhon@gamil.com', phone: '123-456'},
    {id:4,name: 'John',email: 'jhon@gamil.com', phone: '123-456'},
    {id:5,name: 'John',email: 'jhon@gamil.com', phone: '123-456'},
]



app.get('/users',(req, res)=>{
    res.send(users)
})
app.get('/users/:id',(req , res)=>{
    const id = parseInt(req.params.id);
    const user = users.find( u=>u. id == id)
    res.send(user)
})
app.post('/user',(req, res)=>{
    console.log(req.body);
    res.send('success')
})

app.listen(port, ()=>{
    console.log('lising to port',port);
})