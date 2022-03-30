class Employee{
	employeeId:number;
	firstName:string;
	lastName:string;
	salary:number;
	readonly organization:string = "Tech Mahindra";
	constructor (id:number, fn:string, ln:string, sl:number){
	this.employeeId = 0;
	this.firstName = 'fn';
	this.lastName = 'ln';
	this.salary = 0;
	//readonly organization:string = "Tech Mahindra";
	}
	
	createEmployee (id:number, fn:string, ln:string, sl:number){
	this.employeeId = id;
	this.firstName = fn;
	this.lastName = ln;
	this.salary = sl;
	}
	readEmployee (employeeId: number){
	//  many lines of code to be writtten
	}
	updateEmployee(employeeId: number){
	//  many lines of code to be writtten
	}
	deleteEmployee(employeeId:number){
	//  many lines of code to be writtten
	}
	getfirstName(){
	return this.firstName;
	}
	setfirstName(fn:string){
	this.firstName='fn';
	}
}

	let emp1 = new Employee (100, "Bharath", "Kondreddy", 50000);
	let emp2 = new Employee (101, "Sai", "Ambadi", 55000);
	emp1.createEmployee(100, "Bharath", "Kondreddy", 50000);
	emp2.createEmployee(101, "Sai", "Ambadi", 55000);
	
	let emp =  emp1.employeeId+' '+emp1.firstName+' '+emp1.lastName+' '+emp1.salary+ ' ' + emp2.employeeId+' '+emp2.firstName+' '+emp2.lastName+' '+emp2.salary+' ' + emp1.getfirstName()+ ' ' + emp2.getfirstName() + emp2.setfirstName('ravi')
	console.log(emp);
	
	//const emp = document.getElementById('emp'); 
	//emp.innerHTML = emp1.employeeId+' '+emp1.firstName+' '+emp1.lastName+' '+emp1.salary+ '<br>' + emp2.employeeId+' '+emp2.firstName+' '+emp2.lastName+' '+emp2.salary '<br>' + emp1.getfirstName()+ '<br>' + emp2.getfirstName;
	
	//emp2.setfirstName('Ravi');
	//emp.innerHTML = emp1.employeeId+' '+emp1.firstName+' '+emp1.lastName+' '+emp1.salary+ '<br>' + emp2.employeeId+' '+emp2.firstName+' '+emp2.lastName+' '+emp2.salary '<br>' + emp1.getfirstName()+ '<br>' + emp2.getfirstName;
	
