var Employee = /** @class */ (function () {
    function Employee(id, fn, ln, sl) {
        this.organization = "Tech Mahindra";
        this.employeeId = 0;
        this.firstName = 'fn';
        this.lastName = 'ln';
        this.salary = 0;
        //readonly organization:string = "Tech Mahindra";
    }
    Employee.prototype.createEmployee = function (id, fn, ln, sl) {
        this.employeeId = id;
        this.firstName = fn;
        this.lastName = ln;
        this.salary = sl;
    };
    Employee.prototype.readEmployee = function (employeeId) {
        //  many lines of code to be writtten
    };
    Employee.prototype.updateEmployee = function (employeeId) {
        //  many lines of code to be writtten
    };
    Employee.prototype.deleteEmployee = function (employeeId) {
        //  many lines of code to be writtten
    };
    Employee.prototype.getfirstName = function () {
        return this.firstName;
    };
    Employee.prototype.setfirstName = function (fn) {
        this.firstName = 'fn';
    };
    return Employee;
}());
var emp1 = new Employee(100, "Bharath", "Kondreddy", 50000);
var emp2 = new Employee(101, "Sai", "Ambadi", 55000);
emp1.createEmployee(100, "Bharath", "Kondreddy", 50000);
emp2.createEmployee(101, "Sai", "Ambadi", 55000);
var emp = emp1.employeeId + ' ' + emp1.firstName + ' ' + emp1.lastName + ' ' + emp1.salary + ' ' + emp2.employeeId + ' ' + emp2.firstName + ' ' + emp2.lastName + ' ' + emp2.salary + ' ' + emp1.getfirstName() + ' ' + emp2.getfirstName() + emp2.setfirstName('ravi');
console.log(emp);
//const emp = document.getElementById('emp'); 
//emp.innerHTML = emp1.employeeId+' '+emp1.firstName+' '+emp1.lastName+' '+emp1.salary+ '<br>' + emp2.employeeId+' '+emp2.firstName+' '+emp2.lastName+' '+emp2.salary '<br>' + emp1.getfirstName()+ '<br>' + emp2.getfirstName;
//emp2.setfirstName('Ravi');
//emp.innerHTML = emp1.employeeId+' '+emp1.firstName+' '+emp1.lastName+' '+emp1.salary+ '<br>' + emp2.employeeId+' '+emp2.firstName+' '+emp2.lastName+' '+emp2.salary '<br>' + emp1.getfirstName()+ '<br>' + emp2.getfirstName;
