

var doc_deg=document.getElementById("degrees");
var doc_types="";
var froot=firebase.database().ref();
var user= firebase.auth().currentUser;
var vertice=user.email.value.substring(0,user.email.value.length-10);

var j=1;
var user_map = new Map();
var user_map1 = new Map();
var btn_fol = new Map();
var hh=document.getElementById("srcresult");
hh.style.visibility="hidden";
var docac;

var profiletype=froot.child(vertice).child("atype").key;
function types1(){
		
		doc_types="anesthesiologist";
		t1.checked=true;
		t2.checked=false;
		t3.checked=false;
		t4.checked=false;
		t5.checked=false;
		t6.checked=false;
		t7.checked=false;
		t8.checked=false;
		t9.checked=false;
		t10.checked=false;
		t11.checked=false;
		t12.checked=false;
		t13.checked=false;
		t14.checked=false;
		t15.checked=false;
		srcbydoctype(doc_types);
}
function types2(){
		doc_types="cardiologist";
		t1.checked=false;
		t2.checked=true;
		t3.checked=false;
		t4.checked=false;
		t5.checked=false;
		t6.checked=false;
		t7.checked=false;
		t8.checked=false;
		t9.checked=false;
		t10.checked=false;
		t11.checked=false;
		t12.checked=false;
		t13.checked=false;
		t14.checked=false;
		t15.checked=false;
		srcbydoctype(doc_types);
}
function types3(){
		doc_types="dentist";
		t1.checked=false;
		t2.checked=false;
		t3.checked=true;
		t4.checked=false;
		t5.checked=false;
		t6.checked=false;
		t7.checked=false;
		t8.checked=false;
		t9.checked=false;
		t10.checked=false;
		t11.checked=false;
		t12.checked=false;
		t13.checked=false;
		t14.checked=false;
		t15.checked=false;
		srcbydoctype(doc_types);
}
function types4(){
		doc_types="ent_specialist";
		t1.checked=false;
		t2.checked=false;
		t3.checked=false;
		t4.checked=true;
		t5.checked=false;
		t6.checked=false;
		t7.checked=false;
		t8.checked=false;
		t9.checked=false;
		t10.checked=false;
		t11.checked=false;
		t12.checked=false;
		t13.checked=false;
		t14.checked=false;
		t15.checked=false;
		srcbydoctype(doc_types);
}
function types5(){
		doc_types="dermatologist";
		t1.checked=false;
		t2.checked=false;
		t3.checked=false;
		t4.checked=false;
		t5.checked=true;
		t6.checked=false;
		t7.checked=false;
		t8.checked=false;
		t9.checked=false;
		t10.checked=false;
		t11.checked=false;
		t12.checked=false;
		t13.checked=false;
		t14.checked=false;
		t15.checked=false;
		srcbydoctype(doc_types);
}
function types6(){
		doc_types="endocrinologist";
		t1.checked=false;
		t2.checked=false;
		t3.checked=false;
		t4.checked=false;
		t5.checked=false;
		t6.checked=true;
		t7.checked=false;
		t8.checked=false;
		t9.checked=false;
		t10.checked=false;
		t11.checked=false;
		t12.checked=false;
		t13.checked=false;
		t14.checked=false;
		t15.checked=false;
		srcbydoctype(doc_types);
}
function types7(){
		doc_types="gynocologist";
		t1.checked=false;
		t2.checked=false;
		t3.checked=false;
		t4.checked=false;
		t5.checked=false;
		t6.checked=false;
		t7.checked=true;
		t8.checked=false;
		t9.checked=false;
		t10.checked=false;
		t11.checked=false;
		t12.checked=false;
		t13.checked=false;
		t14.checked=false;
		t15.checked=false;
		srcbydoctype(doc_types);
}
function types8(){
		doc_types="immunologist";
		t1.checked=false;
		t2.checked=false;
		t3.checked=false;
		t4.checked=false;
		t5.checked=false;
		t6.checked=false;
		t7.checked=false;
		t8.checked=true;
		t9.checked=false;
		t10.checked=false;
		t11.checked=false;
		t12.checked=false;
		t13.checked=false;
		t14.checked=false;
		t15.checked=false;
		srcbydoctype(doc_types);
}
function types9(){
		doc_types="medicine_specialist";
		t1.checked=false;
		t2.checked=false;
		t3.checked=false;
		t4.checked=false;
		t5.checked=false;
		t6.checked=false;
		t7.checked=false;
		t8.checked=false;
		t9.checked=true;
		t10.checked=false;
		t11.checked=false;
		t12.checked=false;
		t13.checked=false;
		t14.checked=false;
		t15.checked=false;
		srcbydoctype(doc_types);
}
function types10(){
		doc_types="neurologist";
		t1.checked=false;
		t2.checked=false;
		t3.checked=false;
		t4.checked=false;
		t5.checked=false;
		t6.checked=false;
		t7.checked=false;
		t8.checked=false;
		t9.checked=false;
		t10.checked=true;
		t11.checked=false;
		t12.checked=false;
		t13.checked=false;
		t14.checked=false;
		t15.checked=false;
		srcbydoctype(doc_types);
}
function types11(){
		doc_types="urologist";
		t1.checked=false;
		t2.checked=false;
		t3.checked=false;
		t4.checked=false;
		t5.checked=false;
		t6.checked=false;
		t7.checked=false;
		t8.checked=false;
		t9.checked=false;
		t10.checked=false;
		t11.checked=true;
		t12.checked=false;
		t13.checked=false;
		t14.checked=false;
		t15.checked=false;
		srcbydoctype(doc_types);
}
function types12(){
		doc_types="surgeon";
		t1.checked=false;
		t2.checked=false;
		t3.checked=false;
		t4.checked=false;
		t5.checked=false;
		t6.checked=false;
		t7.checked=false;
		t8.checked=false;
		t9.checked=false;
		t10.checked=false;
		t11.checked=false;
		t12.checked=true;
		t13.checked=false;
		t14.checked=false;
		t15.checked=false;
		srcbydoctype(doc_types);
}
function types13(){
		doc_types="oncologist";
		t1.checked=false;
		t2.checked=false;
		t3.checked=false;
		t4.checked=false;
		t5.checked=false;
		t6.checked=false;
		t7.checked=false;
		t8.checked=false;
		t9.checked=false;
		t10.checked=false;
		t11.checked=false;
		t12.checked=false;
		t13.checked=true;
		t14.checked=false;
		t15.checked=false;
		srcbydoctype(doc_types);
}
function types14(){
		doc_types="pediatrician";
		t1.checked=false;
		t2.checked=false;
		t3.checked=false;
		t4.checked=false;
		t5.checked=false;
		t6.checked=false;
		t7.checked=false;
		t8.checked=false;
		t9.checked=false;
		t10.checked=false;
		t11.checked=false;
		t12.checked=false;
		t13.checked=false;
		t14.checked=true;
		t15.checked=false;
		srcbydoctype(doc_types);
}
function types15(){
		doc_types="psychologist";
		t1.checked=false;
		t2.checked=false;
		t3.checked=false;
		t4.checked=false;
		t5.checked=false;
		t6.checked=false;
		t7.checked=false;
		t8.checked=false;
		t9.checked=false;
		t10.checked=false;
		t11.checked=false;
		t12.checked=false;
		t13.checked=false;
		t14.checked=false;
		t15.checked=true;
		srcbydoctype(doc_types);
}


function func1(){
	window.location("search.html");	
}
function func2(){
	if(profiletype=="doc"){
		window.location("schedule.html");	
	}
	else
	{
		window.location("get_appointment.html");	
	}
}
function func3(){
	window.location("notifications.html");
}
function func4(){
	window.location("messages.html");
}
function func5(){
	window.location("profile.html");
}

function func9(){
	var psts=froot.child("posts");
	
	psts.forEach(function(childSnapshot){
		vc=childSnapshot.val();
		vert=vc.child(i).child("user_email").key;
		vert=vert.substring(0,vert.length-10);
		if(vert==docac){
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
}

function func7(){
	var proid = event.srcElement.id
    var user_id = user_map1.get(proid);
    
    docac=user_id;
	window.location("doc_account.html");
	func9();
}

function func8(){
	var vert;
    var btnID = event.srcElement.id
    var user_id = user_map.get(btnID);
    vert=user_id;
	if(froot.child("following").child(vertice).child(vert).key==vert){
		froot.child("following").child(vertice).child(vert).key="";
		document.getElementById(btnID).getElementsByTagName('button')[1].innerHTML ="follow";

	}
	else
	{
		froot.child("following").child(vertice).child(vert).key=vert;
		document.getElementById(btnID).getElementsByTagName('button')[1].innerHTML ="following";
	}
}

function srcbydoctype(doct){
	j=1;
	froot.child(doct).forEach(function(childSnapshot){
			var docs=childSnapshot.val();
			var cldiv=document.querySelector("#srcresult");
			var copy = cldiv.cloneNode(true);
			copy.id="srcresult"+j;
      		cldiv.parentNode.insertBefore(copy, cldiv);
            document.getElementById(copy.id).getElementsByTagName('button')[0].id ="pname"+j;
            document.getElementById(copy.id).getElementsByTagName('button')[0].innerHTML =froot.child(docs.key).child("User Name").key; 
            document.getElementById(copy.id).getElementsByTagName('p')[0].innerHTML = froot.child(docs.key).child("doc_types").key;
            document.getElementById(copy.id).getElementsByTagName('p')[1].innerHTML = froot.child(docs.key).child("doc_deg").key;
            document.getElementById(copy.id).getElementsByTagName('p')[2].innerHTML = froot.child(docs.key).child("visit").key;
            document.getElementById(copy.id).getElementsByTagName('button')[1].id ="fbut"+j;
            var vert=froot.child(docs.key).child("ac").key;
            user_map.set("fbut"+j,vert);
            user_map1.set("pname"+j,vert);


            if(froot.child("following").child(vertice).child(vert).key==vert){
            	document.getElementById(copy.id).getElementsByTagName('button')[1].innerHTML ="following";
            }
            else
            {
            	document.getElementById(copy.id).getElementsByTagName('button')[1].innerHTML ="follow";
            }
			j++;
	});

}
function getsrcresult(){
	var srctxt=document.getElementById("srctext").value;
	document.getElementById("pname").innerHTML=srctxt;
	srctxt=froot.child("doc").child(srctxt).key;
	if(srctxt!=null){
		hh.style.visibility="visible";
		document.getElementById("dtype").innerHTML=froot.child(srctxt).child("atype").key;
		document.getElementById("degrees").innerHTML=froot.child(srctxt).child("doc_deg").key;
		document.getElementById("degrees").innerHTML=froot.child(srctxt).child("visit").key;		
	}
}