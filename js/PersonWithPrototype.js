function Person(name){
	this.name = name;
};

Person.prototype.sayHello = function(){
	console.log("Hello, I'm " + this.name);
}

var bill = new Person("Bill Gates");
var jobs = new Person("Steven Jobs");
bill.sayHello();
jobs.sayHello();

console.log(bill.sayHello == jobs.sayHello); // true