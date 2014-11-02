// 每个函数里都有一个默认的this
function whoAmI(){
	console.log("I am " + this.name + " of " + typeof(this));
}

whoAmI();
// I am undefined of object

var billGates = {name:"Bill Gates"};
whoAmI.call(billGates);
// I am Bill Gates of object

billGates.whoAmI = whoAmI;
billGates.whoAmI();
// I am Bill Gates of object

var steveJobs = { name:"Steve Jobs"};
billGates.whoAmI.call(steveJobs); // 将steveJobs当做this去调用billGates的whoAmI方法。
// I am Steve Jobs of object

whoAmI.whoAmI = whoAmI;
whoAmI.name = "WHO AM I";
whoAmI.whoAmI();
// I am WHO AM I of function;

({name:'Nobody', whoAmI:whoAmI}).whoAmI();
// I'm nobody of object