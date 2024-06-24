const router = require('express').Router()
const { crearPost, traerPost, actualizarPosts, eliminarPost, actualizarLike } = require('../controller/postController.js');


router.post("/posts", crearPost)

router.get("/posts",traerPost)

router.put("/posts/:id", actualizarPosts)

router.put("/posts/like/:id", actualizarLike)

router.delete("/posts/:id", eliminarPost)






module.exports = router