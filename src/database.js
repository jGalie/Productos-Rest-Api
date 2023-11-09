import mysqlConnection from 'mysql2/promise';

const properties = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gauna_julieta'
};

export const pool = mysqlConnection.createPool(properties);