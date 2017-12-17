var countDown = new Date("Dec 19, 2017, 00:00:00").getTime();

var timer = setInterval(function(){
	var now = new Date().getTime();
	var timeLeft = countDown - now;
	var days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
	var hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
	var minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
	var seconds = Math.floor(timeLeft % (60 * 1000) / 1000);

	document.getElementById("countDown").innerHTML = 'Until St. Nicholas day is ' + days + 'd ' + hours + 'h '
	 + minutes + 'm ' + seconds + 's ' + 'left';
	if (timeLeft < 0){
		clearInterval(timer);
		document.getElementById("countDown").innerHTML = "Now";
	}
}, 1000);