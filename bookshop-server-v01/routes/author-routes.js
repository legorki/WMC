"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorRouter = void 0;
const express = __importStar(require("express"));
const db_1 = require("../config/db");
const author_1 = require("../model/author");
exports.authorRouter = express.Router();
exports.authorRouter.get('/', (req, res) => {
    let data = [];
    db_1.pool.query('SELECT * FROM author', (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send('server error 1234, please call zid');
        }
        else {
            for (let i = 0; i < rows.length; i++)
                data.push(new author_1.Author(0, rows[i].uuid, rows[i].familyname, rows[i].firstname));
            res.status(200).send(data);
        }
    });
});
exports.authorRouter.get('/:id', (req, res, next) => {
    db_1.pool.query('SELECT * FROM author WHERE uuid = ' + db_1.pool.escape(req.params.id), (err, rows) => {
        if (err)
            next(err);
        else if (rows.length > 0)
            res.status(200).send(new author_1.Author(0, rows[0].uuid, rows[0].familyname, rows[0].firstname));
        else
            res.status(404).send(null);
    });
});
exports.authorRouter.get('/search/:name', (req, res, next) => {
    let identifier = "%" + req.params.name + "%";
    let stmt = 'SELECT * FROM author WHERE firstname LIKE ' + db_1.pool.escape(identifier) + ' OR familyname LIKE ' + db_1.pool.escape(identifier);
    let data = [];
    db_1.pool.query(stmt, (err, rows) => {
        if (err)
            next(err);
        else {
            for (let i = 0; i < rows.length; i++)
                data.push(new author_1.Author(0, rows[i].uuid, rows[i].familyname, rows[i].firstname));
            res.status(404).send(data);
        }
    });
});
exports.authorRouter.put('/:uuid', (req, res, next) => {
    let sql = "UPDATE author SET firstname = " + db_1.pool.escape(req.body.firstname) + ", familyname = "
        + db_1.pool.escape(req.body.lastname) + " WHERE uuid = " + db_1.pool.escape(req.params.uuid);
    db_1.pool.query(sql, (err, rows) => {
        if (err)
            next(err);
        else if (rows.affectedRows > 0)
            res.status(200).send("" + rows.affectedRows); // ?? changedrows???
        else
            res.status(404).send("" + 0);
    });
});
exports.authorRouter.delete('/:uuid', (req, res, next) => {
    let sql = "DELETE FROM author WHERE uuid = " + db_1.pool.escape(req.params.uuid);
    db_1.pool.query(sql, (err, rows) => {
        if (err) {
            if (err.errno == 1451) {
                res.status(409).send("" + -1); // FK constraint
            }
            else
                next(err);
        }
        else if (rows.affectedRows > 0)
            res.status(200).send("" + rows.affectedRows);
        else
            res.status(404).send("" + 0);
    });
});
exports.authorRouter.post('/', (req, res, next) => {
    let values = [req.body.firstname, req.body.lastname];
    let sql = "INSERT INTO author (uuid,firstname,familyname) " +
        "values (uuid(), " + db_1.pool.escape(req.body.firstname) + "," + db_1.pool.escape(req.body.lastname) + ")";
    db_1.pool.query(sql, (err, rows) => {
        if (err)
            next(err);
        else {
            if (rows.affectedRows > 0) {
                db_1.pool.query('SELECT * FROM author WHERE id = ' + rows.insertId, (err, rws) => {
                    if (err)
                        next(err);
                    else if (rws.length > 0) {
                        let au = { uuid: rws[0].uuid, lastname: rws[0].familyname, firstname: rws[0].firstname };
                        res.status(200).send(au);
                    }
                    else
                        res.status(404).send(null);
                });
            }
            else
                res.status(404).send("" + 0);
        }
    });
});
