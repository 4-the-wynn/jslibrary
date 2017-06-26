function line(){
	console.log ("---------------------")
};

function theyDo(){
	console.log("Functions allow you to run some code whenever you call them!")
};

theyDo();

line();

function more(){
	var x="functions can have variables in them & ";
	var y="functions can do all of the number things that integers do";
	console.log(x + y)
};

more();

line();

function parameters(x,y){
	console.log(x+y)
}

var x="the parameters come before the code of the function "
var y="and they allow you to change your code outside of the function!"

parameters(x,y)