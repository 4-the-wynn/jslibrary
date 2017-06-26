//objects are similar to arrays

var anObject={
	script:		" they can have strings.",
	numbers:	2,

	doesStuff: function(){
		console.log(this.numbers+ this.script)
	},

}

anObject.doesStuff()

console.log(anObject.script);

anObject.script="we can change stuff"

console.log(anObject.script);
console.log(anObject.numbers*=5);

//here is a constructor

var pasta={
	type:"",
	sauce:"",
	calories:0,
	constructor:function(type,sauce,calories){
		this.type=type;
		this.sauce=sauce;
		this.calories=calories;
	},
};

var spaghetti=Object.create(pasta);
spaghetti.constructor("angel hair","marinara",40302)
console.log(spaghetti);