var countdown = document.getElementById("countdown");
var countDownDate = new Date("Jan 27, 2018 08:00:00").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	countdown.innerHTML = "There are " + days + " days, " + hours + " hour(s), and " + minutes + " minutes <br/>";
	if(distance < 0) {
		clearInterval(x);
		document.getElementById("remaining").innerHTML = "";
		countdown.innerHTML = "🎉 iMUNC 2018 is now in session! 🎉";
	}
}, 1000);