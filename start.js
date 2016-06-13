function mobileCheck(){
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
   else 
  {
    return false;
  }
}
function load(){
	if (mobileCheck()) {
		document.body.style.backgroundColor = "red";
		document.getElementById("text").style.fontSize = "42px";
		for (var i = 0; i < 2; i++) {
			document.getElementsByClassName("text2")[i].style.fontSize = "42px";
		};
		var bluebox =document.getElementById("r");
		bluebox.style.top = "25%";
		bluebox.style.height = "15%";
		bluebox.style.right = "25%";
		bluebox.style.left = "25%";
		bluebox.style.width = "50%";
		bluebox.style.backgroundColor = "lightblue"

		var option1 = document.getElementById("z");
		option1.style.top = "42%";
		option1.style.height = "8%";
		option1.style.right = "25%";
		option1.style.left = "25%";
		option1.style.width = "50%";
		option1.style.backgroundColor = "pink";

		var option2 = document.getElementById("t");
		option2.style.top = "52%";
		option2.style.height = "8%";
		option2.style.right = "25%";
		option2.style.left = "25%";
		option2.style.width = "50%";
		option2.style.backgroundColor = "pink";

	};
}