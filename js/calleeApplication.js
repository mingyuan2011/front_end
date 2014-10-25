/*
	callee 可以用于递归
*/

var sum = function(n){
	if( n <= 1){
		return 1;
	} else {
		return n + arguments.callee(n-1);
	}
};

console.log(sum(100));