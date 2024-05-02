"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
class Author {
    constructor(id = -1, uuid = "", lastname = "", firstname = "") {
        this.id = id;
        this.uuid = uuid;
        this.lastname = lastname;
        this.firstname = firstname;
    }
}
exports.Author = Author;
