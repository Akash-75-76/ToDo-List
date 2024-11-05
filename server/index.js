import express from 'express';
import cors from 'cors';
const app=express();
import Connection from './database/db.js';
import Routes from './routes/routes.js'
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/',Routes);
const PORT=8000;
Connection();
app.listen(PORT,()=>console.log(`Your server is running on port ${PORT}`));