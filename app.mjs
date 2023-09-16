import Application from "./application.mjs";

const app = Application.app()

const htmlOptions = {root: '.'}

app.get('/',(req,res) => {    
    return res.sendFile("./views/index.html",htmlOptions)
})

export default app