function Person(name, age){
	this.name = name;
	this.age  = age;
}

function Student(name, age, grade){
	Person.apply(this, arguments);
	this.grade = grade;
}

var student = new Student("Jim", 18, "Freshman");
console.log("Name: " + student.name);
console.log("Age : " + student.age);
console.log("Grade: " + student.grade);