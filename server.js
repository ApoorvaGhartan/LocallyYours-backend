import express from "express";
import cors from "cors";

const app = express();
const corsOptions={
    origin:["http://localhost:5173"]
}
app.use(cors(corsOptions))
app.get("/api",(req,res)=>{
    res.send("Hello")
})

const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log(`Server started on port${port}`);
})