function Person(name){
	this.name = name;
};

Person.prototype.sayHello = function(){
	console.log("Hello, I'm " + this.name);
};

function Employee(name, salary){
	Person.call(this, name);
	this.salary = salary;
};

Employee.prototype = new Person();  // js 使用这样的方式实现继承

Employee.prototype.showMeTheMoney = function(){
	console.log( this.name + " $ " + this.salary);
};

var bill = new Employee("Bill Gates", 10000);
var steve = new Employee("Steve Jobs" ,10001);

bill.sayHello();
steve.sayHello();

bill.showMeTheMoney();
