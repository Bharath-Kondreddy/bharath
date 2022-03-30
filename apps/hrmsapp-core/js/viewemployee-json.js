async function viewEmployees(){
	let employeeData = [];
	let response = await $.getJSON("../js/model/viewemployee.json");
		employeeData = response;

	let empTable = "";
	let tableHeader="";
	let tableRows="";
	
	// Constructing the View Employee Header
	tableHeader="<tr><th>Emp ID</th> <th>First Name</th> <th>Last Name</th> <th>E-Mail</th> <th>Phone No.</th> <th>Hire Date</th> <th>Salary</th> <th>Job Id</th> <th>Commision Pct</th> <th>Manager Id</th> <th>Department Id</th><th>Action</th></tr>"
	
	// Iterate the Employee employeeData and construct the Table row and add rows to it.
		let i;
		for(i=0; i<employeeData.length; i++){
			let employeeId = employeeData[i].employeeId;
			let firstName = employeeData[i].firstName;
			let lastName = employeeData[i].lastName;
			let email = employeeData[i].email;
			let phoneNumber = employeeData[i].phoneNumber;
			let hireDate = employeeData[i].hireDate;
			let salary = employeeData[i].salary;
			let jobId = employeeData[i].jobId;
			let commisionPct = employeeData[i].commisionPct;
			let managerId = employeeData[i].managerId;
			let departmentId = employeeData[i].departmentId;
			
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
							<td><input id=${employeeId} type="button" value="Edit">
								<input type="button" value="Delete">
							</td></tr>`;
				tableRows = tableRows + addRow;
		}

empTable = "<table>"+ tableHeader + tableRows +"</table>";
document.getElementById("empTable").innerHTML = empTable;
}