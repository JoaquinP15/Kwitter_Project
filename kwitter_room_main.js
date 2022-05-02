
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

function addroom()
{
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose:"adding roomname",
     });
     localStorage.setItem("room_name", room_name);
     window.location = "kwitter_room_index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-" + Room_names);
row = "<div class='Room_names' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 function redirectToRoomName(name)
 {
console.log(name);
localStorage.setItem("Room_name", name);
window.location = "kwitter_page_index.html";
 }

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");

      window.location = "kwitter.html";
}
