function onLoad(){
	let Num1 = document.getElementById("n1").value;
	let Num2 = document.getElementById("n2").value;
	// Calling Function
	//sub();
	sub(444,1101);
	// let res = sub (1234, 4321);
	//console.log("In calling function sub = "+res);
}
// Called Functions


/*
function sub(){ //Function with no Arguments
	let result = 100 - 50;
	console.log("Static Substraction = "+result);	
}
*/
function sub(Num1, Num2){ //Funnction with Arguments
		let result = Num1- Num2;
		console.log("Dynamic Substraction = "+result);
}

/*
function sub(Num1, Num2){ // Function with Arguments and Return type
		let result = Num1 - Num2;
		return res;
}
*/
function 

function addition(){
	let string1 = document.getElementById("n1").value;
	let string2 = document.getElementById("n2").value;
	let Num1 = parseInt(string1);
	let Num2 = parseInt(string2);
	let res1 = Num1 + Num2;
	console.log(res1);
	document.getElementById("result").innerHTML = res1;
}
function substraction(){
	let string3 = document.getElementById("n1").value;
	let string4 = document.getElementById("n2").value;
	let res2 = parseInt(string3) - parseInt(string4);
	console.log(res2);
	document.getElementById("result").innerHTML = res2;
}
function multiplication(){
	let string5 = document.getElementById("n1").value;
	let string6 = document.getElementById("n2").value;
	console.log(parseInt(string5) * parseInt(string6));
	document.getElementById("result").innerHTML = parseInt(string5) * parseInt(string6);
}
function division(){
	let string7 = document.getElementById("n1").value;
	let string8 = document.getElementById("n2").value;
	console.log(parseInt(string7) / parseInt(string8));
	document.getElementById("result").innerHTML = parseInt(string7) / parseInt(string8);
}