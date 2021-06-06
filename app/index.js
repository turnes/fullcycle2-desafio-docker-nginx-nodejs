const express = require('express')
const app = express()
const port = 3000

const env = process.env;

const config = {  
    host: env.DB_HOST || 'db',
    user: env.MYSQL_USER || 'root',
    password: env.MYSQL_PASSWORD || 'root_password',
    database: env.MYSQL_DATABASE || 'nodedb'    
};

const mysql = require('mysql2/promise')
const connection = mysql.createConnection(config)

app.get('/', async (req, res) => {

  try {
    const getNames = `SELECT name FROM nodedb.people`
    const [rows] = await (await connection).query(getNames);
    let listName = "<ul>"
    console.log(rows)
    Object.keys(rows).forEach(function(key) {
      var row = rows[key];
      listName += `<li>${row.name}</li>`    
    });
    
    listName += "</ul>"
    console.log(listName)
    res.send('<h1> Full Cycle</h1>' + listName)
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
