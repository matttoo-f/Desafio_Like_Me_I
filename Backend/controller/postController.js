const postCollections = require('../models/posts.models.js');
const findError = require('../utils/utils.js')

// create
const crearPost = async (req, res) => {
    try {
        const { titulo, url, descripcion } = req.body;
        await postCollections.agregarPost(titulo, url, descripcion);
        res.send("Post agregado con éxito");
    } catch (error) {
        const errorFound = findError(error.code)
        res.status(errorFound[0].status)
        .json(errorFound[0].message)
    }
};

// get
const traerPost = async (req, res) => {
    try {
        const posts = await postCollections.getPosts();
        res.json(posts);
    } catch (error) {
        const errorFound = findError(error.code)
        res.status(errorFound[0].status)
        .json(errorFound[0].message)


    }
};

// put
const actualizarPosts = async (req, res) => {
    try {
        const { id } = req.params;
        const { post } = req.body;
        const posts = await postCollections.updatePost(id, post);
        res.status(200).json({ posts: post });
    } catch (error) {
        const errorFound = findError(error.code)
        res.status(errorFound[0].status)
        .json(errorFound[0].message)

    }
};

// put

const actualizarLike = async (req, res) => {
    try {
        const { id } = req.params;
        await postCollections.updateLike(id);
        res.status(200).send("Like actualizado correctamente");
    } catch (error) {
        const errorFound = findError(error.code)
        res.status(errorFound[0].status)
        .json(errorFound[0].message)

    }
  };

// delete

const eliminarPost = async (req, res) => {
    try {
        const { id } = req.params;
        await postCollections.deletePost(id);
        res.status(200).send(`Post con id ${id} eliminado con éxito`);
    } catch (error) {
        const errorFound = findError(error.code)
        res.status(errorFound[0].status)
        .json(errorFound[0].message)

    }
};


module.exports = {
    crearPost,
    traerPost,
    actualizarPosts,
    eliminarPost,
    actualizarLike
};
