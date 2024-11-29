var profiletype="";
var vertice="";
var optype=document.getElementById("optype");
var numnot=0;
var doctext=document.getElementById("doctext");
var docpost=document.getElementById("docpost");
var postbutton=document.getElementById("postbutton");
var froot=firebase.database().ref();
var nop=0;
var user_email;
var cpost=0;
// var hh=document.getElementById("profeed");
// hh.style.visibility="hidden";

function protype(){
	var user = firebase.auth().currentUser;

	vertice=user.email;
	user_email=user.email;
	vertice=user.email.substring(0,user.email.length-10);
	profiletype=froot.child(vertice).child("atype").key;
	var psts=froot.child("posts");
	document.getElementById("profile").innerHTML=froot.child(vertice).child("User Name").key;
	var i=1,j=1,vc,vert;
	
	var fv=document.getElementById("profeed");
	fv.style.visibility="hidden";

	psts.forEach(function(childSnapshot){
		vc=childSnapshot.val();
			console.log(user);
		vert=vc.child(i).child("user_email").key;
		vert=vert.substring(0,vert.length-10);
		if(froot.child("following").child(vertice).child(vert).key=="yes"){
			var cldiv=document.querySelector("#profeed");
			var copy = cldiv.cloneNode(true);
			copy.id="profeed"+j;
      		cldiv.parentNode.insertBefore(copy, cldiv);
            document.getElementById(copy.id).getElementsByTagName('button')[0].id ="pname"+j;
            document.getElementById(copy.id).getElementsByTagName('button')[0].innerHTML =froot.child(vert).child("User Name").key; 
            document.getElementById(copy.id).getElementsByTagName('p')[0].innerHTML = froot.child(vert).child("doc_types").key;
            document.getElementById(copy.id).getElementsByTagName('p')[1].innerHTML = froot.child(vert).child("doc_deg").key;
            document.getElementById(copy.id).getElementsByTagName('p')[2].innerHTML = vc.child(i).child("post_text").key;
			j++;
		}
		i++;
	});
	if(profiletype=="doc"){
		optype.innerHTML = "Manage Schedule";
	}
	else
	{
		optype.innerHTML = "Get An Appointment";
		docpost.style.visibility="hidden";
		doctext.style.visibility="hidden";
		postbutton.style.visibility="hidden";
	}

}

function func1(){
	window.location = "search.html";
}
function func2(){
	if(profiletype=="doc"){
		window.location = "schedule.html";	
	}
	else
	{
		window.location = "get_appointment.html";
	}
}
function func3(){
	window.location = "notifications.html";
}
function func4(){
	window.location = "messages.html";
}
function func5(){
	window.location = "profile.html";
}
function func6(){

	console.log(firebase.auth().currentUser);
	var post_author_Name = firebase.auth().currentUser.displayName;
	var post_description = document.getElementById("doctext").value;
	var newPostKey = firebase.database().ref().child('UserPost').push().key;
	var Recog = "MBBS, FCPS";
	firebase.database().ref('/UserPost/' + newPostKey).set({
		Author_Name     	: post_author_Name,
		Description     	: post_description,
		Author_recogniztion : Recog
	}).then(function() {
		window.location = "home.html";
	});


	// var pst=froot.child("posts");
	// if(doctext.value!=""&&doctext.value!=null){
	// 	nop=0;
	// 	pst.forEach(function(childSnapshot){
	// 		console.log(nop);
	// 		nop++;
	// 	});
	// 	nop++;
	// 	pst.child(nop).child("user_email").set(user_email);
	// 	pst.child(nop).child("post_text").set(doctext);
	// 	pst.child(nop).child("asc_order").set(nop);
	// }
}
// function func7(){
// 	window.location = "doc_account.html";
// }



let globalID = 0;

firebase.database().ref('/UserPost').on('value', function(snapshot) {
	snapshot.forEach(function(childSnapshot) {  
		let childData = childSnapshot.val();

		cloneBlock = document.querySelector("#HereWeGo").cloneNode(true);
		cloneBlock.id = globalID++;
		console.log(globalID); 
		document.querySelector("#HereWeGo").parentNode.insertBefore(cloneBlock, document.querySelector("#HereWeGo"));
			
		let postID = childSnapshot.key;
		let currentBlockID = cloneBlock.id;
		let myBlock = document.getElementById(currentBlockID);
		myBlock.style.visibility = "visible";

		myBlock.querySelector('#myPostUserName').innerHTML = childData.Author_Name;
		myBlock.querySelector('#myPostDetails').innerHTML = childData.Description;
		myBlock.querySelector('#myRecogSpan').innerHTML = childData.Author_recogniztion;
	});
});