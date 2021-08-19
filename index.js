require("dotenv").config()

const server = require("./api/server.js")
const port = process.env.PORT
const dbEnv = process.env.NODE_ENV

server.get('/', (req, res) => {
    res.send('<h1>Water My Plants API</h1>')
})
server.listen(port, () => {
    console.log(`\n ------Plants API Listening on port ${port}!--------`)
    console.log(`\n ------API Running in ${dbEnv} mode!--------`)
})