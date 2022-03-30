class Employee{
	int employeeId;
	String firstName;
	String lastName;
	int salary;
	Employee(){
		this.employeeId = 0;
		this.firstName = " ";
		this.lastName = " ";
		this.salary = 0;
	}
	void createEmployee(int id, String fn, String ln, int sl){
		this.employeeId = id;
		this.firstName = fn;
		this.lastName =  ln;
		this.salary = sl;
	}
	void viewEmployee(){
		System.out.println(this.employeeId+' '+this.firstName+' '+this.lastName+' '+this.salary);
	}
	void updateEmployee(){
		//code to update employee details
	}
	void deleteEmployee(){
		//code to delete employee details
	}
	public static void main(String args[]){
		Employee emp1 = new Employee;
		emp1.createEmployee(100, 'Bharath', 'Kondreddy', 50000);
		emp1.viewEmployee();
	}
}