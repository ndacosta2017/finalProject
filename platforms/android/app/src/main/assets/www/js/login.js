 //Using native alerts from cordova
 document.addEventListener('deviceready', function () {
    if (navigator.notification) {
        window.alert = function (message) {
            navigator.notification.alert(
                message,    // message
                null,       // callback
                "Coronaviral", // title
                'OK'
            );
        };
    }
  }, false);
 
 
 document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('login').onclick = login;
  });

  var login = function(){
      var inputUser = document.getElementById("username").value;
      var inputPass = document.getElementById("password").value;
      var username = "ndacosta2017";
      var password = "password";
      if (inputUser == username && inputPass == password) {
        location.replace("covid19.html");
    }
    else { 
        alert("Enter correct Username or Password");
    }
  }