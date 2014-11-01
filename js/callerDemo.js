function whoCallMe(){
	console.log(whoCallMe.caller);
};

function callA(){
	whoCallMe();
}

console.log(whoCallMe.caller);   // null

callA();                         // [Function: callA]

