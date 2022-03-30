class Employee{
	constructor(id, fn, ln, sl){
		this.employeeId = id;
		this.firstName = fn;
		this.lastName = ln;
		this.salary = sl;
	}
}

function employee(){
	let emp1 = new Employee(100, 'Bharath', 'Kondreddy', 50000);
	let emp2 = new Employee(101, 'Sai', 'Ambadi', 55000);
	let emps = emp1.employeeId+' '+emp1.firstName+' '+emp1.lastName+' '+emp1.salary+ '<br>' + emp2.employeeId+' '+emp2.firstName+' '+emp2.lastName+' '+emp2.salary;
	console.log(emps);
	return emps;
}

function main() {
	let emps = employee();
	document.getElementById('table').innerHTML = emps;
}
employee();