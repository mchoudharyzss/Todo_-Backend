import express from 'express';
import cors from 'cors';
import { Database } from './src/db/db.js';
import user from './src/routes/User.routes.js';
import Task from './src/routes/Task.routes.js';
const app = express();
const PORT =process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('api/user', user);
app.use('/api/tasks', Task);
Database()
.then(()=>{
    app.listen( PORT ,()=>{
        console.log("The Server is Starting ");
    })
}).catch((error)=>{
    console.log("The ever is FAILED",error);
})