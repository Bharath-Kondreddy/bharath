class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

let car1, car2, car3, car4;
car1 = new Car("audi", 2000);
car2 = new Car("ford", 2001);
car3 = new Car("rolls royce", 2002);
car4 = new Car("bmw", 2003);
document.getElementById("demo").innerHTML =
car1.name + " " + car1.year+"<br>"+car2.name + " " + car2.year+"<br>"+car3.name + " " + car3.year+"<br>"+car4.name + " " + car4.year;