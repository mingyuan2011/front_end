// 声明式函数
function myFunc(){
	console.log("hello");
}

console.log("myFunc: " + typeof(myFunc));
/* Output
myFunc: function
*/

// 变量式函数
var yetAnotherFunction = function(){
	console.log("Hello");
};

console.log("yetAnotherFunction: " + typeof(yetAnotherFunction));
/* Output
yetAnotherFunction: function
*/