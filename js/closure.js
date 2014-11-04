function Person(firstName, lastName, age){
	var _firstName = firstName;
	var _lastName = lastName;

	this.age = age;

	this.getName = function(){
		return _firstName + " " + _lastName;
	}

}

var bill = new Person("Bill", "Gates", 30);
bill.getName();

var steve = new Person("Steve", "Jobs", 31);
steve.getName();

console.log(bill.getName == steve.getName);