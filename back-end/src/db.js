import mysql from 'mysql2'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '123456789A@a',
  database: 'duantotnghiep',
})
export default connection
