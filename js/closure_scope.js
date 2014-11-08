/*
	闭包：闭包是指有权限访问另一个函数作用域的变量的函数。创建闭包的常见的方式就是在一个函数的内部创建另一个函数。
	当一个函数在定义它的作用域外调用的时候，就形成了改内部函数的一个闭包。
	这种情况下，我们称 既不是内部函数局部变量也不是其参数的变量为自由变量，称外部函数的调用环境为封闭闭包环境。
*/

function outerFn(){
	var outerVar = 0;
	console.log("Outer Function");
	function innerFn(){
		outerVar++;
		console.log("Inner Function:" + outerVar);
	}
	return innerFn;
}

var innerFnRef = outerFn();
innerFnRef(); // 1
innerFnRef(); // 2

var innerFnRef2 = outerFn();
innerFnRef2(); // 1
innerFnRef2(); // 2


/*
	闭包之间的交互
	innerFn1, innerFn2共享一个封闭环境

	多次调用outerFu2
	产生了这些闭包的新实例，同是也创建了新的封闭环境，
	本质就是创建了一个新的对象，自由变量就是这个对象的实例，而闭包就是这个对象的方法。
	这些变量是私有的，从而保证了面向对象数据的专有性。
*/
function outerFn2(){

	var outerVar = 0;

	function innerFn1(){
		outerVar ++;
		console.log("InnerFn1 " + outerVar);
	}
	function innerFn2(){
		outerVar +=10;
		console.log("InnerFn2 " + outerVar);
	}
	return {'fn1':innerFn1, 'fn2':innerFn2};
}

var fnRef = outerFn2();
fnRef.fn1(); // 1
fnRef.fn2(); // 11
fnRef.fn1(); // 12

var fnRef2 = outerFn2();
fnRef2.fn1(); // 1
fnRef2.fn2(); // 11
fnRef2.fn1(); // 12
