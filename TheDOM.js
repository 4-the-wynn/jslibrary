function removeItem(){
	var item=document.getElementById('remove')
	console.log(item);
	document.body.removeChild(item)
}

function creation(){
	var p=document.createElement("P");
	var t=document.createTextNode("Congrats I guess you created this");
	p.appendChild(t);
	document.getElementById("creation").appendChild(p)
}

//function addButton(){
	//var btn=document.createElement("BUTTON");//creates a button element
	//var text= document.createTextNode("I JUST GOT ADDED");//create a text node
	//btn.appendChild(text);
	//document.body.appendChild(btn);
//}









function allGone(){
	document.write("NOW YOU KNOW JAVASCRIPT")
}

