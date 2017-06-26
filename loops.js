//there are for and if loops

//for(counter;condition;increment){
// code to be run
//}

for(var i=2; i<100000; i*=i){
	console.log(i)
	if(i%4==0){
		console.log("divisible by 4!")
		break;
	}
}

//while loops tell you to run some code until something happens

var counter=3
while(counter<10000){
	counter*=6
	console.log(counter);
if(counter%2==0){
	console.log("I'm even!")
}};