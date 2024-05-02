import express = require('express');
const app = express();
const port: number = 3000;

import mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookshop'
})
connection.connect();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

class author {
    readonly id:number;
    readonly lastname:string;
    readonly firstname:string;
    constructor(id:number, last:string, first:string){
        this.id = id; this.lastname=last; this.firstname=first;
    }
}

app.get('/authors/',
    (req,
     res) => {
        let  data: author[] = [];
        connection.query('SELECT * FROM author', (err, rows) => {
            if (err) throw err;
            for (let i = 0; i < rows.length; i++)
                data.push(new author(rows[i].id,rows[i].familyname,rows[i].firstname));
            res.status(200).send(data);
        })
    })

app.get('/authors/:id', (req, res) =>{
    const authorId = req.params.id;

    connection.query('SELECT * FROM author WHERE id = ?', [authorId], (err, rows) =>{
        if (err) throw err;

        if (rows === 0){
            res.status(400).send('Author not found.');
        } else{
            const author1 = new author(rows[0].id, rows[0].familyname, rows[0].firstname);
            res.status(200).send(author1);
        }
    })
})

app.patch('/authors/:id', (req, res) => {
    const authorId = req.params.id;
    const {firstname, lastname} = req.body;

    if(!firstname || !lastname){
        res.status(400).send('Name is required.');
    }

    connection.query('UPDATE author SET firstname = ?, familyname = ? WHERE id = ?', [firstname, lastname, authorId], (err, result) =>{
        if (err) throw err;
        if(result.affectedRows === 0){
            res.status(400).send('None of the rows changed.');
        }
        else{
            res.status(200).send('Author updated.');
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
