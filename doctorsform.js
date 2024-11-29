var doc_types="";
var doc_deg=document.getElementById("degrees");
var visit=document.getElementById("visit");

var email=document.getElementById("Email").value;

var t1=document.getElementById("anesthesiologist");
var t2=document.getElementById("cardiologist");
var t3=document.getElementById("dentist");
var t4=document.getElementById("ent_specialist");
var t5=document.getElementById("dermatologist");
var t6=document.getElementById("endocrinologist");
var t7=document.getElementById("gynocologist");
var t8=document.getElementById("immunologist");
var t9=document.getElementById("medicine_specialist");
var t10=document.getElementById("neurologist");
var t11=document.getElementById("urologist");
var t12=document.getElementById("surgeon");
var t13=document.getElementById("oncologist");
var t14=document.getElementById("pediatrician");
var t15=document.getElementById("psychologist");

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
}


function submit(){
	if(doc_types!=""&&doc_deg.value!=""&&visit.value!="")
	{
		var user = firebase.auth().currentUser;
        
		var vertice=user.email.substring(0,user.email.length-10);
		froot.child(doc_types).child(vertice).set(vertice);
		froot.child(vertice).child("doc_types").set(doc_types);
        froot.child(vertice).child("doc_deg").set(doc_deg.value);
        froot.child(vertice).child("visit").set(visit.value);

        window.location="home.html";
	}
	else
	{
		window.alert("please provide+ all the informations.");
	}
}