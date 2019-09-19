var fetchJson=function(q){
var txt=""
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    var myObj = JSON.parse(this.responseText);
	   x=q
	    	 txt+=" "+x+":<br><code>"+
	    	 "Name : "+myObj[x].question+"<br>Options are : "+myObj[x].options+"</code><br><br>";
	    	  document.getElementById("demo").innerHTML = txt;
	    	  document.getElementById("option1").innerHTML=myObj[x].options[0];
	    	  document.getElementById("option2").innerHTML=myObj[x].options[1];
	    	  document.getElementById("option3").innerHTML=myObj[x].options[2];
	    	  document.getElementById("option4").innerHTML=myObj[x].options[3];
	  
	  }
	};
	xmlhttp.open("GET", "data.json", true);
	xmlhttp.send();
}