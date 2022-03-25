const router = require("express").Router()

router.get("/usertest", (req, res) =>{
    res.send("USER TEST")
})

module.exports = router