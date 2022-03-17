
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCxR8lZEQrIkUPJIFif0xU7A_Iz2IRqETs",
    authDomain: "project-bcffd.firebaseapp.com",
    databaseURL: "https://project-bcffd-default-rtdb.firebaseio.com",
    projectId: "project-bcffd",
    storageBucket: "project-bcffd.appspot.com",
    messagingSenderId: "375374982271",
    appId: "1:375374982271:web:5dc93e364ff6811e4d634a"
  };
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
