export class User {

    uuid = "";
    username = "";
    email = "";
    is_admin = false;
    firstname = "";
    lastname = "";
    sex = "";
    address = "";
    postalcode = "";
    city = "";
    country = "";

    constructor(uuid:string, username:string, email:string, is_admin:boolean, firstname:string, lastname:string, sex:string, address:string, postalcode:string, city:string, country:string){
        this.uuid = uuid;
        this.username = username;
        this.email = email;
        this.is_admin = is_admin;
        this.firstname = firstname;
        this.lastname = lastname;
        this.sex = sex;
        this.address = address;
        this.postalcode = postalcode;
        this.city = city;
        this.country = country;
    }

}
