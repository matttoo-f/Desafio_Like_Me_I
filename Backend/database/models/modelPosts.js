const pool = require('../db_config')

    


const agregarPost = async (titulo, url, descripcion) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3) RETURNING *"
    const values = [titulo, url, descripcion]
    const result = await pool.query(consulta, values)
    console.log("post agregado")
    }

const getPosts = async () => {
    const consulta = "SELECT * FROM posts"
    const { rows } = await pool.query(consulta)
    console.log(rows)
    return rows
    }
        


const postCollections = {
    agregarPost,
    getPosts
}

module.exports = postCollections