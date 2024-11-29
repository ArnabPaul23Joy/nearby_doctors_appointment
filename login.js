var froot=firebase.database().ref();

function login(){
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(function(user) {
        var user = firebase.auth().currentUser;
        console.log(user);
        var vertice=user.email.substring(0,user.email.length-10);
        localStorage.setItem('currentUserID', user.uid);
        console.log(user.uid);
        if(froot.child(vertice).child("atype").key=="doc"){
          if(froot.child(vertice).child("doc_type").key==null){
            window.location = "doctorsform.html";
          }
          else
          {
            window.location="home.html";
          }
        }
          else
          {
            window.location="home.html";
          }

    }, function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error Code: " + errorCode);
        window.alert("Error Message: " + errorMessage);   
    }); 
  }

  // function signup(){
  //     window.location = "Registration.html";
  // }