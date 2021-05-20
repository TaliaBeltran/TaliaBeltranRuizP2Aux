//-------------------------------------------Clases e Interfaces-------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//-	Cree una clase llamada “Department” 
//-	Agregue las siguientes propiedades a la clase:  
//        o	owner: su nombre completo 
//        o	id: un id para identificar el departamento 
//        o workers: una lista de los trabajadores 
//        o	createWorker: un método para agregar empleados al departamento 
//        o	showEmployeesInfo: un método para mostrar la información de los empleados (la cantidad y los nombres) 
var Department = /** @class */ (function () {
    function Department(owner, id) {
        this.owner = 'Talia Beltran Ruiz';
        this.id = 1;
        this.workers = [];
        this.owner = owner;
        this.id = id;
    }
    Department.prototype.createWorker = function (trab) {
        this.workers.push(trab);
    };
    Department.prototype.showEmployeesInfo = function () {
        console.log("La cantidad de empleados es " + this.workers.length);
        console.log(this.workers);
    };
    Department.prototype.verow = function () {
        return this.owner;
    };
    return Department;
}());
//-	Cree una instancia de la clase “Department” tomando como argumento su nombre y un id para 
//  identificar el Departamento y luego agregue 3 empleados 
var departamento1 = new Department('Talia Beltran Ruiz', 1);
departamento1.createWorker('Juan');
departamento1.createWorker('Pedro');
departamento1.createWorker('Luis');
//-	Muestre la información de los empleados haciendo uso del metodo 
departamento1.showEmployeesInfo();
//-	Cree otra clase llamada “CEODeparment” 
//-	Herede las propiedades de la clase “Deparment” 
//- Agregue las siguientes propiedades: 
//        o	admins: una lista con los roles disponibles. Como ser: “AUTHOR”, “ADMIN”, etc 
var CEODeparment = /** @class */ (function (_super) {
    __extends(CEODeparment, _super);
    function CEODeparment(owner, id, admins) {
        var _this = _super.call(this, owner, id) || this;
        _this.admins = [];
        _this.admins = admins;
        return _this;
    }
    return CEODeparment;
}(Department));
//-	Cree una instancia de “CEODepartment” y agregue tres roles tomados como uno de los argumentos
//-	Muestre la propiedad “admins” de la instancia creada 
var ins = new CEODeparment("Talia2", 2, ["AUTHOR", "ADMIN", "USER"]);
console.log(ins.admins);
//-	Cree otra clase llamada “ReportsDepartment” y herede la clase “Department” 
//- 	Agregue las siguientes propiedades: 
//        o	reports: una lista que contendrá reportes. Por ejemplo: “task 004 failed”, etc
//        o addReport: un método para agregar nuevos reportes 
var ReportsDepartment = /** @class */ (function (_super) {
    __extends(ReportsDepartment, _super);
    function ReportsDepartment(owner, id) {
        var _this = _super.call(this, owner, id) || this;
        _this.reports = [];
        return _this;
    }
    ReportsDepartment.prototype.addReport = function (rep) {
        this.reports.push(rep);
    };
    ReportsDepartment.prototype.verRepor = function () {
        return this.reports;
    };
    return ReportsDepartment;
}(Department));
