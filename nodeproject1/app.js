const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookshop'
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/authors/', (req, res) => {
    let data = [];
    connection.query('SELECT * FROM author', (err, rows) => {
        if (err) throw err;
        for (let i = 0; i < rows.length; i++)
            data.push({id:rows[i].id, lastname:rows[i].familyname, firstname:rows[i].firstname});
        res.status(200).send(data);
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/authors/:id', (req, res) => {
    let data = [];
    let authorID = req.params.id
    connection.query('SELECT * FROM author WHERE id=?', [authorID], (err, rows) => {
        if (err) throw err;
        for (let i = 0; i < rows.length; i++)
            data.push({id:rows[i].id, lastname:rows[i].familyname, firstname:rows[i].firstname});
        res.status(200).send(data);
    })
})

app.get('/authors/search/:name', (req, res) => {
    let data = [];
    let authorName = req.params.name
    connection.query('SELECT * FROM author WHERE firstname like ?', [authorName], (err, rows) => {
        if (err) throw err;
        for (let i = 0; i < rows.length; i++)
            data.push({id:rows[i].id, lastname:rows[i].familyname, firstname:rows[i].firstname});
        res.status(200).send(data);
    })
})

app.put('/authors/:id', (req, res) => {
    let data = [];
    let authorID = req.params.id
    let authorFName = req.body.lastname
    let authorLName = req.body.firstname
    connection.query('UPDATE author SET familyname = ?, firstname = ? where id = ?', [authorFName, authorLName, authorID], (err, result) => {
        if (err) {
            res.status(500).send("Error updating data");
            console.log(err);
            throw err;

        }  else if(result.affectedRows === 0) {

            res.status(404).send("Author not found");

        } else {
            res.status(200).send("Success");
        }

    })
})

app.post('/authors/', (req, res) => {
    let data = [];
    const body = req.body;
    for (var i = 0; i < body.length; i++) {
        console.log(body[i]);
        connection.query(
            "INSERT INTO author (firstname, familyname) VALUES(?,?)",
            [body[i].firstname, body[i].lastname],
            (err, result) => {
                if (err) {
                    res.status(500).send("Error updating data");
                    console.log(err);
                    throw err;

                }  else if(result.affectedRows === 0) {

                    res.status(404).send("Author not found");

                } else {
                    res.status(200).send("Success");
                }
            }
        );
    }

})
app.delete('/authors/:id', (req, res) => {
    let data = [];
    let authorID = req.params.id
    connection.query('DELETE FROM author WHERE id=?', [authorID], (err, result) => {
        if (err) {
            res.status(500).send("Error deleting data");
            console.log(err);
            throw err;
        }  else if(result.affectedRows === 0) {
            res.status(404).send("Author not found");
        } else {
            res.status(200).send("Success");
        }
    })
})
