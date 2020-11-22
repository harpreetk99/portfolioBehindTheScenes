// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCAg4Qbz6RBSGArxAY4-C-M0cfEpGikrZQ",
  authDomain: "subscriptionnewsletter-563de.firebaseapp.com",
  databaseURL: "https://subscriptionnewsletter-563de.firebaseio.com",
  projectId: "subscriptionnewsletter-563de",
  storageBucket: "subscriptionnewsletter-563de.appspot.com",
  messagingSenderId: "748725200460",
  appId: "1:748725200460:web:c0293138ba40eceeac36e9",
  measurementId: "G-X77ZLKZG72",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference email collection
var emailRef = firebase.database().ref("emails");

// Listen for form submit
document
  .getElementById("subscription_form")
  .addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  //Get value
  var name = getInputVal("user_name");
  var email = getInputVal("user_email");
  // Save message
  saveMessage(email, name);

  // Show alert
  //document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  /*  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000); */

  // Clear form
  document.getElementById("subscription_form").reset();
}

// Function to get form value
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email, name) {
  var newEmailRef = emailRef.push();
  newEmailRef.set({
    email: email,
    name: name,
  });

  window.location.href = "/thanks.html";
}
