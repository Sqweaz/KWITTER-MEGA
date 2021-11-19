//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyArif257dN0I93MIxTeb1y5H91qVgSOoyw",
      authDomain: "kwitter-57e57.firebaseapp.com",
      databaseURL: "https://kwitter-57e57-default-rtdb.firebaseio.com",
      projectId: "kwitter-57e57",
      storageBucket: "kwitter-57e57.appspot.com",
      messagingSenderId: "414418404106",
      appId: "1:414418404106:web:3e8cc4b730b368654830f3"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}