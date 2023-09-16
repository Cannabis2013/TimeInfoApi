import express from "express"

let app = null

const init = () => {
    const app = express()
    const port = 3000
    app.listen(port, () => {
        console.log(`http://localhost:${port}/`)
    })
    return app
}

export default {
    name: "Application",
    app() {
        if(app)
            return app
        app = init()
        return app
    }
}