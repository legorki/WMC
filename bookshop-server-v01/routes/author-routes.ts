import * as express from 'express';

import {pool} from "../config/db";
import {Author} from "../model/author";

export const authorRouter = express.Router();

authorRouter.get('/',
    (req,
     res) => {
        let  data: Author[] = [];
        pool.query('SELECT * FROM author', (err, rows) => {
            if (err) {
                console.log(err);
                res.status(500).send('server error 1234, please call zid');
            }
            else {
                for (let i = 0; i < rows.length; i++)
                    data.push(new Author(0, rows[i].uuid, rows[i].familyname, rows[i].firstname));
                res.status(200).send(data);
            }
        })
    })
authorRouter.get('/:id', (req, res, next) => {
    pool.query('SELECT * FROM author WHERE uuid = ' + pool.escape(req.params.id) , (err, rows) => {
        if (err) next(err);
        else if (rows.length > 0)
            res.status(200).send(new Author(0, rows[0].uuid, rows[0].familyname, rows[0].firstname));
        else res.status(404).send(null);
    })
})
authorRouter.get('/search/:name', (req, res, next) => {
    let identifier = "%" + req.params.name + "%";
    let stmt = 'SELECT * FROM author WHERE firstname LIKE ' + pool.escape(identifier) + ' OR familyname LIKE ' + pool.escape(identifier);
    let data:any[] = [];
    pool.query(stmt, (err, rows) => {
        if (err) next(err);
        else {
            for (let i = 0; i < rows.length; i++)
                data.push(new Author(0, rows[i].uuid, rows[i].familyname, rows[i].firstname));
            res.status(404).send(data);
        }
    })
})
authorRouter.put('/:uuid',  (req, res, next) =>{
    let sql = "UPDATE author SET firstname = " + pool.escape(req.body.firstname) + ", familyname = "
        + pool.escape(req.body.lastname) + " WHERE uuid = " + pool.escape(req.params.uuid);
    pool.query(sql,  (err, rows) => {
        if(err) next(err);
        else if (rows.affectedRows > 0) res.status(200).send(""+rows.affectedRows);  // ?? changedrows???
        else res.status(404).send(""+0);
    })
})
authorRouter.delete('/:uuid', (req, res, next) =>{
    let sql= "DELETE FROM author WHERE uuid = " + pool.escape(req.params.uuid);
    pool.query(sql, (err,rows) => {
        if(err) {
            if (err.errno == 1451) {
                res.status(409).send(""+-1);  // FK constraint
            }
            else next(err);
        }
        else if (rows.affectedRows > 0) res.status(200).send(""+rows.affectedRows);
        else res.status(404).send(""+0);
    })
})
authorRouter.post('/',  (req, res, next) =>{
    let values = [req.body.firstname,req.body.lastname];
    let sql = "INSERT INTO author (uuid,firstname,familyname) "+
        "values (uuid(), " + pool.escape(req.body.firstname) + "," + pool.escape(req.body.lastname) +")";
    pool.query(sql, (err, rows) => {
        if(err) next(err);
        else {
            if (rows.affectedRows > 0)
            {
                pool.query('SELECT * FROM author WHERE id = ' + rows.insertId , (err, rws) => {
                    if (err) next(err);
                    else if (rws.length > 0) {
                        let au = {uuid: rws[0].uuid, lastname:rws[0].familyname, firstname:rws[0].firstname};
                        res.status(200).send(au);
                    }
                    else res.status(404).send(null);
                })
            }
            else res.status(404).send(""+0);
        }
    })
})
