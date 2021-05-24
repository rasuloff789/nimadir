let app = require("express")()

app.use(require("cors")())

app.get("/" , (req,res) => res.send("ok"))

app.listen(4000 , console.log('localhost:4000'))