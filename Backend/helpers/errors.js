// errors.js
const ERRORS = [
    {
        code: '23502',
        status: 500,
        message: 'Hay un error en los campos.'
    },
    {
        code: '23503',
        status: 400,
        message: 'Violación de restricción de clave foránea.'
    },
    {
        code: '23505',
        status: 400,
        message: 'Violación de restricción de unicidad.'
    },
    {
        code: '42601',
        status: 400,
        message: 'Error de sintaxis SQL.'
    },
    {
        code: '42703',
        status: 400,
        message: 'Columna no existe.'
    },
    {
        code: '42P01',
        status: 400,
        message: 'Tabla no existe.'
    },
    {
        code: '08001',
        status: 500,
        message: 'No se puede conectar al servidor de base de datos.'
    },
    {
        code: '22P02',
        status: 400,
        message: 'Valor inválido para tipo de dato.'
    }
];

module.exports = ERRORS;
