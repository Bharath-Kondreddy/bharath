class Person{
	constructor(name, yob, place){
		this.name = name;
		this.yob = yob;
		this.place = place;
	}
	
	//Method without a parameter.
	Age(){
		let currentDate = new Date();
		return currentDate.getFullYear() - this.yob - 1;
	}
	//Method with a parameter.
	age(something){
		
		return something - this.yob -1; 
	}
	
}
let date = new Date();
let year = date.getFullYear();

let p1 = new Person("Bharath", 1997, "Manuguru");
let p2 = new Person("Sai", 1996, "GDK");

document.getElementById("MyAge").innerHTML = "My name is "+p1.name+"."+"I am "+p1.Age()+" years old";
console.log("My name is "+p2.name+"."+"I am "+p2.age(year)+" years old");