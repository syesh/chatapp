const firebaseConfig = {
  apiKey: "AIzaSyB4fXAXwZVtWp8L401Lgo_XW3W266Xw1H8",
  authDomain: "chatapp-trial-ac8f3.firebaseapp.com",
  projectId: "chatapp-trial-ac8f3",
  storageBucket: "chatapp-trial-ac8f3.firebasestorage.app",
  messagingSenderId: "1076743357776",
  appId: "1:1076743357776:web:fcdacf60df98be4a0c5855",
  measurementId: "G-5FESW9Y85M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const chatContainer = document.getElementById("chat");
const nameInput = document.getElementById("nam");
const msgInput = document.getElementById("mes");
const form = document.querySelector(".form form");

// Listen for new messages in Firestore
db.collection("messages").orderBy("timestamp")
  .onSnapshot(snapshot => {
    chatContainer.innerHTML = "";
    snapshot.forEach(doc => {
      const data = doc.data();
      let p = document.createElement("p");
      p.textContent = `${data.name || "Anonymous"} : ${data.text}`;
      chatContainer.appendChild(p);
    });
  });

// Send a new message to Firestore
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = nameInput.value.trim() || "Anonymous";
  const message = msgInput.value.trim();
  if (!message) return;

  db.collection("messages").add({
    name: name,
    text: message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });

  msgInput.value = "";
});