//-------------------------------------------Clases e Interfaces-------------------------------------------

//-	Cree una clase llamada “Department” 
//-	Agregue las siguientes propiedades a la clase:  
//        o	owner: su nombre completo 
//        o	id: un id para identificar el departamento 
//        o workers: una lista de los trabajadores 
//        o	createWorker: un método para agregar empleados al departamento 
//        o	showEmployeesInfo: un método para mostrar la información de los empleados (la cantidad y los nombres) 

class Department{
    private owner: string= 'Talia Beltran Ruiz';
    id: number=1;
    workers: Array <string> = [];
    constructor(owner: string, id: number){
        this.owner = owner;
        this.id = id;
    }
    createWorker(trab:string){
        this.workers.push(trab)
    }
    showEmployeesInfo(){
        console.log(`La cantidad de empleados es ${this.workers.length}`);
        console.log(this.workers)
    }
    verow():string{
        return this.owner;
    }
}


//-	Cree una instancia de la clase “Department” tomando como argumento su nombre y un id para 
//  identificar el Departamento y luego agregue 3 empleados 
let departamento1 = new Department('Talia Beltran Ruiz', 1)
departamento1.createWorker('Juan')
departamento1.createWorker('Pedro')
departamento1.createWorker('Luis')
//-	Muestre la información de los empleados haciendo uso del metodo 
departamento1.showEmployeesInfo();

//-	Cree otra clase llamada “CEODeparment” 
//-	Herede las propiedades de la clase “Deparment” 
//- Agregue las siguientes propiedades: 
//        o	admins: una lista con los roles disponibles. Como ser: “AUTHOR”, “ADMIN”, etc 

class CEODeparment extends Department{
    admins: Array<string> = [];
    constructor (owner: string, id: number, admins: string[]){
        super(owner, id);
        this.admins = admins;
    }
}

//-	Cree una instancia de “CEODepartment” y agregue tres roles tomados como uno de los argumentos
//-	Muestre la propiedad “admins” de la instancia creada 
let ins = new CEODeparment ("Talia2", 2, ["AUTHOR", "ADMIN", "USER"]);
console.log(ins.admins)

//-	Cree otra clase llamada “ReportsDepartment” y herede la clase “Department” 
//- 	Agregue las siguientes propiedades: 
//        o	reports: una lista que contendrá reportes. Por ejemplo: “task 004 failed”, etc
//        o addReport: un método para agregar nuevos reportes 

class ReportsDepartment extends Department{
     reports: Array<string> = [];
    constructor(owner: string, id: number){
        super (owner, id);
    }
    addReport(rep:string){
        this.reports.push(rep);
    }
    verRepor():string[]{
        return this.reports;
    }

}
