export class User {

    uuid = "";
    username = "";
    email = "";
    isAdmin = 0;
    firstname = "";
    lastname = "";
    sex = "";
    address = "";
    postalcode = "";
    city = "";
    country = "";

    constructor(uuid:string, username:string, email:string, isAdmin:number, firstname:string, lastname:string, sex:string, address:string, postalcode:string, city:string, country:string){
        this.uuid = uuid;
        this.username = username;
        this.email = email;
        this.isAdmin = isAdmin;
        this.firstname = firstname;
        this.lastname = lastname;
        this.sex = sex;
        this.address = address;
        this.postalcode = postalcode;
        this.city = city;
        this.country = country;
    }

}
