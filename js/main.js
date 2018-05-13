



function date(){
	
	setInterval(function(){
		var d = new Date();
		document.getElementById("date").innerHTML = d;
		console.log(d.getFullYear());
		console.log(d.getMonth());
		console.log(d.getDate());
		console.log(d.getHours());
		console.log(d.getMinutes());
		console.log(d.getSeconds());

	},1000);
}

date();
