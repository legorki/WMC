export class Book {

    id:Number;
    uuid:string;
    isbn:string;
    author:string;
    title:string;
    price:Number;

    constructor(id:Number, uuid:string, isbn:string, author:string, title:string, price:Number) {
        this.id = id;
        this.uuid = uuid;
        this.isbn = isbn;
        this.author = author;
        this.title = title;
        this.price = price;
    }

}
