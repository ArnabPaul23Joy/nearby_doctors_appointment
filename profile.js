
	var x = document.getElementById("cor");
	var froot=firebase.database().ref();	var i=0;
	var x = document.getElementById("demo");
	
	function loaddata(){
		
	var user= firebase.auth().currentUser;
	var vertice=user.email.substring(0,user.email.length-10);

		document.getElementById("pros").getElementsByTagName('p')[1].innerHTML = froot.child(vertice).child("User Name").key;
		document.getElementById("pros").getElementsByTagName('p')[2].innerHTML = froot.child(vertice).child("Password").key;
		document.getElementById("pros").getElementsByTagName('p')[3].innerHTML = froot.child(vertice).child("ac").key;
		document.getElementById("pros").getElementsByTagName('p')[4].innerHTML = froot.child(vertice).child("atype").key;
		document.getElementById("pros").getElementsByTagName('p')[4].innerHTML = froot.child(vertice).child("doc_types").key;
		document.getElementById("pros").getElementsByTagName('p')[4].innerHTML = froot.child(vertice).child("doc_deg").key;
		document.getElementById("pros").getElementsByTagName('p')[4].innerHTML = froot.child(vertice).child("visit").key;
        
	}

	function getLocation() {
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(showPosition);
	  } else {
	    x.innerHTML = "Geolocation is not supported by this browser.";
	  }
	}

	function showPosition(position) {
	  x.innerHTML = "Latitude: " + position.coords.latitude + 
	  "<br>Longitude: " + position.coords.longitude;


	var user= firebase.auth().currentUser;
	var vertice=user.email.substring(0,user.email.length-10);


		froot.child(vertice).child("latitude").set(position.coords.latitude);
		froot.child(vertice).child("longitude").set(position.coords.longitude);
	}
