require('dotenv').config()

const { Pool } = require('pg')

const {HOST, DB_USER, DB_PASSWORD, DB_DATABASE} = process.env
    

const pool = new Pool({
                host: HOST,
                user: DB_USER,
                password: DB_PASSWORD,
                database: DB_DATABASE,
                port: 5433,
                allowExitOnIdle: true
                })

module.exports = pool



