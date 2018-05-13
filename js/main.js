function month(m){
	var month="";
	switch(m){
		case 0:
			month = "January";
			return month;
		break;
		case 1:
			month = "February";
			return month;
		break;
		case 2:
			month = "March";
			return month;
		break;
		case 3:
			month = "April";
			return month;
		break;
		case 4:
			month = "May";
			return month;
		break;
		case 5:
			month = "June";
			return month;
		break;
		case 6:
			month = "July";
			return month;
		break;
		case 7:
			month = "August";
			return month;
		break;
		case 8:
			month = "September";
			return month;
		break;
		case 9:
			month = "October";
			return month;
		break;
		case 10:
			month = "November";
			return month;
		break;
		case 11:
			month = "December";
			return month;
		break;
		default:
			month = "";
	}
}



function date(){
	
	setInterval(function(){
		var d = new Date();
		document.getElementById("date").innerHTML = d;
		console.log(d.getFullYear());
		var m = d.getMonth();
		console.log(month(m));
		console.log(d.getDate());
		console.log(d.getHours());
		console.log(d.getMinutes());
		console.log(d.getSeconds());

	},1000);
}

date();
