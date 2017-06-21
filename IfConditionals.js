//if conditionals tell Javascript what to execute

function check(x){
	if(x%2==1)
		return false;
	return true;
}

console.log(check(5));


//There are also else if conditonals

function add(x,y){
	var z=x+y;
	if(z>9)
		console.log("big");
	else
		console.log("not big")
}

add(5,3)

//You can add so many elses and ifs

function multiply(x,y){
	var number=x+y;
	var digits= number.toString();
	var totalDigits=digits.length
	if (totalDigits<=1)
		console.log("very little");
	else if(totalDigits>1 && totalDigits<3)
		console.log("less little");
	else
		console.log("avoid this number");
}

multiply(1,1)

