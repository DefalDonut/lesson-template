import express from 'express';
const app = express();


app.listen(3000, ()=> console.log('Server started'));

app.get('/', async (req,res) =>{
    res.send('Hello');
})
