function calculator(operator){

	let sign = operator;
	let string1 = document.getElementById("n1").value;
	let string2 = document.getElementById("n2").value;
	let num1 = parseInt(string1);
	let num2 = parseInt(string2);
	let result = calculateInNode(num1, num2, sign);
	console.log(result);
}
function calculateInNode(num1, num2, sign){
	let res;
	switch (sign){
		case "+":{res = addition(num1, num2);}
		break;
		case "-":{res = substraction(num1,num2);}
		break;
		case "*":{res = multiplication(num1, num2);}
		break;
		case "/":{res = division(num1, num2);}
		break;
		}
		console.log(res);
		return res;
}


function addition(num1, num2){
	let res1 = num1 + num2;
	return res1;
	document.getElementById("result").innerHTML = res1;

}
function substraction(num1, num2){
	let res2 = num1 - num2;
	return res2;
	document.getElementById("result").innerHTML = res2;

}
function multiplication(num1, num2){
	let res3 = num1 * num2;
	return res3;
	document.getElementById("result").innerHTML = res3;

}
function division(num1, num2){
	let res4 = num1 / num2;
	return res4;
	document.getElementById("result").innerHTML = res4;

}
calculateInNode(999, 666, '-');
