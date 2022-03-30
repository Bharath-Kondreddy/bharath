function main(){
	ExampleForIfElseifElse();
	function1();
	function2();
	function3();
	function4();
	legalAge();
	function5();
	elseIfLadder();
	switchCaseBreak();
	switchFruits();
	forLoop1();
}
function ExampleForIfElseifElse(){

	let x,y,z;
	x=6;
	y=5;
	z=6;
	if(x>z){
		document.getElementById("conditions").innerHTML = "Yes, the condition 'x'>'z' is true!"
	}
	else if (x<z){
		document.getElementById("conditions").innerHTML = "Yes, the condition 'x'<'z' is true!"
	}
	/*else if (x==z){
		document.getElementById("conditions").innerHTML = "Yes, the condition 'x'='z' is true!"
	}*/
	else{
		document.getElementById("conditions").innerHTML = "False Condition"
	}
}
function function1(){
	if (true){
	console.log("true condition");
	}
}
function function2(){
	if (false){
	console.log("false condition");
	}
}
function function3() {
	if (true) {
	console.log("if condition is true here");
}
	else {
		console.log("false condition");
}	}	
function function4() {
	if (false) {
			console.log("true condition");
	}
	else {
	console.log("else condition is true here")
}
  }
function legalAge(){
	let age=17;
	if (age>=18){
		console.log("You are a Major")
	}
}
function function5() {
	let age =19;
	if (age>=18) {
		console.log("you are eligible to Vote");
	    }
	else {
	console.log("you are not eligible to Vote,please apply after"+" "+(18-age)+" "+"years for a Voter ID");
    }
}
function elseIfLadder() {
		const time=new Date().gethours;
		let greeting;
		if (time<10) {
			greeting ="Good Morning";
		}
		else if (time < 16){
			greeting="Good Day";
		}
		else if (time < 19){
			greeting="Good Evening";
		}
		else {
			greeting="Good Night";
		}	
		console.log(greeting);
}		
function switchCaseBreak(){
	let day;
	console.log(new Date().getDay());
	switch (new Date().getDay()){
		case 0:
			day ="Aadivaaram";
			break;
		case 1:
			day="Somavaaram";
			break;
		case 2:
			day ="Mangalavaaram";
			break;
		case 3:
			day ="Budhavaaram";
			break;
		case 4:
			day ="Guruvaaram";
			break;
		case 5:
			day ="Shukravaaram";
			break;
		case 6:
			day="Shanivaaram";
	}
	console.log(day);
}	
function switchFruits(){
	let fruits=["Apple","Banana","Custard","Guava","Water Melon","Grapes"];
	let print= "";
	for (let i = 0;i < fruits.length; i++){
		print += fruits[i] + "<br>";
	console.log(print);
	document.getElementById("conditions").innerHTML=print;
	}
}

function forLoop1(){
	let colors=["voilet","indigo","blue","green","yellow","orange","red"];
	let rainbow="";
	console.log(colors.length);
	let i = colors.length-1;
	for (i; i > 0; i--){
		rainbow += colors[i] + "<br>";	
	}
	console.log(rainbow);	
	document.getElementById("colorline").innerHTML=rainbow;
}
	
