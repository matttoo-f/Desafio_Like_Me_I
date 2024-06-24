const pool = require('../database/db_config');

const agregarPost = async (titulo, url, descripcion, like = 0) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4) RETURNING *";
    const values = [titulo, url, descripcion, like];

    try {
        const result = await pool.query(consulta, values);
        console.log("post agregado");
    } catch (error) {
        console.log(error)
    }
};

const getPosts = async () => {
    const consulta = "SELECT * FROM posts";

    try {
        const { rows } = await pool.query(consulta);
        console.log(rows);
    return rows;
    } catch (error) {
        console.log(error)

    }
};

const updatePost = async (id, { titulo, url, descripcion, like }) => {
    const consulta = "UPDATE posts SET titulo = $1, url = $2, descripcion = $3, like = $4 WHERE id = $5 RETURNING *";
    const values = [titulo, url, descripcion, like, id];

    try {
        const result = await pool.query(consulta, values);
        return result.rows;
    } catch (error) {
        console.log(error)

    }
};

const deletePost = async (id) => {
    const consulta = "DELETE FROM posts WHERE id = $1 RETURNING *";
    const values = [id];

    try {
        const result = await pool.query(consulta, values);
        if (result.rowCount === 0) {
            throw new Error(`Post con id ${id} no encontrado`);
        }
        console.log(`post con id ${id} eliminado`);
        return result.rows[0];
    } catch (error) {
        console.log(error)
    }
};

const updateLike = async (id) => {
    try {
        const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1";
        const values = [id];
        await pool.query(consulta, values);
    } catch (error) {
        console.log(error)
    }
  };

const postCollections = {
    agregarPost,
    getPosts,
    updatePost,
    deletePost,
    updateLike
};

module.exports = postCollections;
