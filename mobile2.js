var g = 0;
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
		for (var i = 0; i < 2; i++) {
			document.getElementsByClassName("text2")[i].style.fontSize = "42px";
		}
		document.getElementsByClassName("text3")[0].style.fontSize = "56px";
		var sub1 =document.getElementById("sub1");
		sub1.style.left = "10%"

		var title = document.getElementById("title");
		title.style.fontSize = "68px";
		title.style.textAlign = "center";

		document.getElementById("header").style.height = "8%";

		var nav =document.getElementById("nav");
		nav.style.display = "none";
		nav.style.right ="0px";
		nav.style.top = "8%";

		var nav2 =document.getElementById("nav2");
		nav2.style.display = "none";
		nav2.style.right ="0px";
		nav2.style.top = "10%";

		var nav3 =document.getElementById("nav3");
		nav3.style.display = "none";
		nav3.style.right ="0px";
		nav3.style.top = "25%";

		var nav4 =document.getElementById("nav4");
		nav4.style.display = "none";
		nav4.style.right ="0px";
		nav4.style.top = "40%";

		var button = document.getElementById("button");
		button.style.display = "inline";

		for (var i = 0; i < 3; i++) {
			document.getElementsByClassName("navtxt")[i].style.display = "none";
			document.getElementsByClassName("navtxt")[i].style.fontSize= "96px";
		};
	};
};
function butt(){
	if (g == 0) {
		nav.style.display ="inline";

		nav2.style.display ="inline";

		nav3.style.display ="inline";

		nav4.style.display ="inline";
		for (var i = 0; i < 3; i++) {
				document.getElementsByClassName("navtxt")[i].style.display = "inline";
		};
		g++;
	}
	else{
		nav.style.display ="none";

		nav2.style.display ="none";

		nav3.style.display ="none";

		nav4.style.display ="none";
		for (var i = 0; i < 3; i++) {
				document.getElementsByClassName("navtxt")[i].style.display = "none";
		};
		g--;
	}
};