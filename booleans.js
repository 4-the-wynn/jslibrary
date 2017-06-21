//booleans are variables with the assignment true or false 

var iAmAGoodCoder= false;
var butIHaveLearnedAlot= true;
var iWantToLearnMore=true;

console.log(iWantToLearnMore);

//There are so many comparisons you can make with booleans in JavaScript
//     ==Equality
//     ===Strict Equality
//     !=Inequality
//     !==strict inequality
//		> 
//		<
//		<=
//		>= Greater than or equal to

console.log(iAmAGoodCoder===butIHaveLearnedAlot);

var numberOfSchoolsIveAttended=2
var degreesIWillRecieve=1

console.log(numberOfSchoolsIveAttended>degreesIWillRecieve);

//There are also logical operators that output booleans

//Logical Operators
//Operators Meaning True Experession
//&&        and
//||		Or
//!         not

console.log(iAmAGoodCoder && butIHaveLearnedAlot);
console.log(butIHaveLearnedAlot && iWantToLearnMore);
console.log(iAmAGoodCoder||iWantToLearnMore);
console.log(!iAmAGoodCoder);