function Person(name){
	this.name = name;
	this.sayHello = function(){
		console.log("Hello, I'm " + this.name);
	};
}

var mingyuan2011 = new Person("mingyuan2011");
var leo = new Person("leonardo");
console.log(mingyuan2011.sayHello == leo.sayHello); // False
/*
	每个对象都有自己的方法数据。
	所以上面的输出是false
*/

function Employee(name, salary){
	this.salary = salary;
	Person.call(this, name);
	this.showMeTheMoney = function(){
		console.log("I'm " + this.name + ", & I earn " + this.salary + " every year.");
	};
}

var bill = new Person("Bill Gates");
var jobs = new Employee("Steve Jobs", 100000);
bill.sayHello();
jobs.showMeTheMoney();

console.log(bill.constructor == Person);      // true
console.log(jobs.constructor == Employee);    // true

console.log(bill.sayHello == jobs.sayHello);  // false

var wang = new Person("Wang");
console.log(bill.sayHello == wang.sayHello);  // false