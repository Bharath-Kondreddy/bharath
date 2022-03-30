function empData(){
	let EmployeeArray = [];
	EmployeeArray= [
		{"employeeId":217,"firstName":"surya","lastName":"pagidipala","email":"surya123@gmail.com","phoneNumber":"9182550827","hireDate":"2021-01-15","salary":10000.0,"jobId":"IT_PROG","commisionPct":null,"managerId":103,"departmentId":60},
		{"employeeId":100,"firstName":"Steven","lastName":"King","email":"SKING","phoneNumber":"515.123.4567","hireDate":"2003-06-17","salary":24000.0,"jobId":"AD_PRES","commisionPct":null,"managerId":102,"departmentId":90},
		{"employeeId":101,"firstName":"Neena","lastName":"Kochhar","email":"NKOCHHAR","phoneNumber":"515.123.4568","hireDate":"2005-09-21","salary":17000.0,"jobId":"AD_VP","commisionPct":null,"managerId":100,"departmentId":90},
		{"employeeId":102,"firstName":"Lex","lastName":"De Haan","email":"LDEHAAN","phoneNumber":"515.123.4569","hireDate":"2001-01-13","salary":17000.0,"jobId":"AD_VP","commisionPct":null,"managerId":100,"departmentId":90},
		{"employeeId":103,"firstName":"Alexander","lastName":"Hunold","email":"AHUNOLD","phoneNumber":"590.423.4567","hireDate":"2006-01-03","salary":9000.0,"jobId":"IT_PROG","commisionPct":null,"managerId":102,"departmentId":60},
		{"employeeId":104,"firstName":"Bruce","lastName":"Ernst","email":"BERNST","phoneNumber":"590.423.4568","hireDate":"2007-05-21","salary":6000.0,"jobId":"IT_PROG","commisionPct":null,"managerId":103,"departmentId":60},
		{"employeeId":105,"firstName":"David","lastName":"Austin","email":"DAUSTIN","phoneNumber":"590.423.4569","hireDate":"2005-06-25","salary":4800.0,"jobId":"IT_PROG","commisionPct":null,"managerId":103,"departmentId":60},
		{"employeeId":106,"firstName":"Valli","lastName":"Pataballa","email":"VPATABAL","phoneNumber":"590.423.4560","hireDate":"2006-02-05","salary":4800.0,"jobId":"IT_PROG","commisionPct":null,"managerId":103,"departmentId":60},
		{"employeeId":107,"firstName":"Diana","lastName":"Lorentz","email":"DLORENTZ","phoneNumber":"590.423.5567","hireDate":"2007-02-07","salary":4200.0,"jobId":"IT_PROG","commisionPct":null,"managerId":103,"departmentId":60},
		{"employeeId":108,"firstName":"Nancy","lastName":"Greenberg","email":"NGREENBE","phoneNumber":"515.124.4569","hireDate":"2002-08-17","salary":12008.0,"jobId":"FI_MGR","commisionPct":null,"managerId":101,"departmentId":100},
		{"employeeId":109,"firstName":"Daniel","lastName":"Faviet","email":"DFAVIET","phoneNumber":"515.124.4169","hireDate":"2002-08-16","salary":9000.0,"jobId":"FI_ACCOUNT","commisionPct":null,"managerId":108,"departmentId":100},
		{"employeeId":110,"firstName":"John","lastName":"Chen","email":"JCHEN","phoneNumber":"515.124.4269","hireDate":"2005-09-28","salary":8200.0,"jobId":"FI_ACCOUNT","commisionPct":null,"managerId":108,"departmentId":100},
		{"employeeId":218,"firstName":"Ravi","lastName":"Kumar","email":"JCHEN","phoneNumber":"515.124.4269","hireDate":"2005-09-28","salary":8200.0,"jobId":"FI_ACCOUNT","commisionPct":null,"managerId":108,"departmentId":100}
		];
	let empTable = "";
	let tableHeader="";
	tableHeader="<tr><th>Emp ID</th> <th>First Name</th> <th>Last Name</th> <th>E-Mail</th> <th>Phone No.</th> <th>Hire Date</th> <th>Salary</th> <th>Job Id</th> <th>Commision Pct</th> <th>Manager Id</th> <th>Department Id</th><th>Action</th></tr>"
	let tableRows="";
//Below is the logic to get the data from th EmployeeArray
		let i;
		for(i=0; i<EmployeeArray.length; i++){
			let employeeId = EmployeeArray[i].employeeId;
			let firstName = EmployeeArray[i].firstName;
			let lastName = EmployeeArray[i].lastName;
			let email = EmployeeArray[i].email;
			let phoneNumber = EmployeeArray[i].phoneNumber;
			let hireDate = EmployeeArray[i].hireDate;
			let salary = EmployeeArray[i].salary;
			let jobId = EmployeeArray[i].jobId;
			let commisionPct = EmployeeArray[i].commisionPct;
			let managerId = EmployeeArray[i].managerId;
			let departmentId = EmployeeArray[i].departmentId;
			
			let addRow = `<tr><td>${employeeId}</td>
							<td>${firstName}</td>
							<td>${lastName}</td> 
							<td>${email}</td> 
							<td>${phoneNumber}</td> 
							<td>${hireDate}</td> 
							<td>${salary}</td> 
							<td>${jobId}</td> 
							<td>${commisionPct}</td> 
							<td>${managerId}</td> 
							<td>${departmentId}</td>
							<td><input id=${employeeId} type="button" value="Edit"><input type="button" value="Delete"></td></tr>`;
				tableRows = tableRows + addRow;
		}

empTable = "<table>"+ tableHeader + tableRows +"</table>";
document.getElementById("empTable").innerHTML = empTable;
}