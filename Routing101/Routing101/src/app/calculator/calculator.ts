export class Calculator {
  t1:number = 1;
  t2:number = 2;
  selectedOperation:string = "+";

  plus(): number {
    let t:number = 0;
    if(this.selectedOperation === "+") {
        t = this.t1 + this.t2;
    }
    return t;
    }

    minus(): number {
        let t:number = 0;
        if(this.selectedOperation === "-") {
            t = this.t1 - this.t2;
        }
        return t;
    }

    div(): number {
        let t:number = 0;
        if(this.selectedOperation === "/") {
            t = this.t1 / this.t2;
        }
        return t;
    }

    mult(): number {
        let t:number = 0;
        if(this.selectedOperation === "*") {
            t = this.t1 * this.t2;
        }
        return t;
    }
}
