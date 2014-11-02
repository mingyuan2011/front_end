function Sing(){
	console.log(Sing.author  + ": " + Sing.poem);
	console.log(Sing.arguments.callee.toString());
}

Sing();    
/*
undefined: undefined
function Sing(){
	console.log(Sing.author  + ": " + Sing.poem);
	console.log(Sing.arguments.callee.toString());
}
*/ 
Sing.author = "李白";
Sing.poem = "日照香炉"
Sing();
/* 动态扩展的代码，不能直接打印出来
李白: 日照香炉
function Sing(){
	console.log(Sing.author  + ": " + Sing.poem);
	console.log(Sing.arguments.callee.toString());
}
*/ 
