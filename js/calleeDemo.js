/*
callee 的用法
[FunctionName.]arguments.callee
返回的是正在执行的函数
*/


function calleeDemo(){
	console.log(arguments.callee);
	console.log(arguments.callee.toString());
}

function calleeLengthDemo(arg1, arg2){
	if(arguments.length == arguments.callee.length){
		console.log("形参和实参数量一致")
	} else {
		console.log("实参数量：" + arguments.length);
		console.log("形参数量：" + arguments.callee.length);
	}
}

calleeLengthDemo("Hello World");
calleeLengthDemo("Hello", "World");
calleeLengthDemo("Hello", "World", "!");

calleeDemo();