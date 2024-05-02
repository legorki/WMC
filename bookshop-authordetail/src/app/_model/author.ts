export class Author {
  id:number = 0;
  uuid: string = "";
  firstname: string = "";
  lastname:string = "";

  constructor(id:number, uuid:string, firstname:string, lastname:string){
    this.id = id;
    this.uuid = uuid;
    this.firstname = firstname;
    this.lastname = lastname;
  }

}
