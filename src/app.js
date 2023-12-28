const express=require("express")

const app=express();
const port=process.env.port||9000





app.listen(port,()=>{
    console.log(`listning to the port ${port}`)
}
)

