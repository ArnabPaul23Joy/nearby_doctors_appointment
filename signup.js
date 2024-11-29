
var atype="";

var uname=document.getElementById("Username");
var email=document.getElementById("Email");
var password=document.getElementById("Password");
var cbutt=document.getElementById("Butt1");
var rdoc=document.getElementById("Doc");
var rpat=document.getElementById("Pat");


var froot=firebase.database().ref();


function SelectD()
{
	rdoc.checked=true;
	rpat.checked=false;
	atype="doc";

}
function SelectP()
{
	rpat.checked=true;
	rdoc.checked=false;
	atype="pat";
}

function CreateAccount(){
	//alert(email.value);

	// if(uname.value!=""&&email.value!=""&&password.value!=""&&atype!=""){
	// 	froot.child("1").set("");
	// 	froot.child("1").child("username").set(uname.value);
	// 	froot.child("1").child("email").set(email.value);
	// 	froot.child("1").child("password").set(password.value);
	// 	froot.child("1").child("account type").set(atype);
	// }
	// else
	// {
	// 	alert("Please give all the mandatory information.");
	// }

	//alert("lsdfbdsf");
	// firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function(error) {
 //  // Handle Errors here.
	//   var errorCode = error.code;
	//   var errorMessage = error.message;
	//   alert(errorMessage);
	//   alert(errorCode);
	//   alert(email.value);
	//   // ...
	// });
     //get info

    var email_password = email.value + password.value;
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(function(user){
        var vertice=email.value.substring(0,email.value.length-10);
        var user = firebase.auth().currentUser;
        user_id=user.email;
        
        user.updateProfile({
            displayName: uname.value

        }).then(function(){
            //Successfull
        }).catch(function(error){
            //error :'-(
        });

        froot.child(vertice).child("atype").set(atype);
        froot.child(vertice).child("ac").set(vertice);
        froot.child(vertice).child("User Name").set(uname.value);
        froot.child(vertice).child("Password").set(password.value);
        froot.child(atype).child(vertice).set(vertice);
        froot.child(atype).child(uname.value).set(vertice)

        .then(function(){
            if(atype=="doc"){
                window.location = "doctorsform.html";
            }
            else
            {
                firebase.auth().signOut();
            
                window.location = "login.html";
            }
            
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMsg = error.mesasage;
            window.alert("An error ocurred\n" + "Code: " + errorCode + "\n" + "Message: " + errorMsg);
        });
    }, function(error){
            var errorCode = error.code;
            var errorMsg = error.mesasage;
            window.alert("An error ocurred\n" + "Code: " + errorCode + "\n" + "Message: " + errorMsg);
            
    });
}
 
