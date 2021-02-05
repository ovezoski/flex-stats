var firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAqNdIlJyayxWDvIJ8_CZXrzcfRf67240I",
  authDomain: "nowchat-test.firebaseapp.com",
  databaseURL: "https://nowchat-test.firebaseio.com",
  projectId: "nowchat-test",
  storageBucket: "nowchat-test.appspot.com",
  messagingSenderId: "585518231887",
  appId: "1:585518231887:web:f7e882ac577f8b9e10153a",
  measurementId: "G-BFS1FR4ZMS"
};

firebase.initializeApp(firebaseConfig);

// firebase.functions().useEmulator("localhost", 5001);


// firebase.auth().signInAnonymously()
firebase.auth().signInWithEmailAndPassword('blagojaovezoski@gmail.com', '123456')
  .then(() => {

    var claimKeys = firebase.functions().httpsCallable('claimKeys');
    claimKeys({da: 'da'})
      .then((result) => console.log("suc ",  result))
      .catch((error) => {
          // Getting the Error details.
          var code = error.code;
          var message = error.message;
          var details = error.details;
          console.log("err", message)
        });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(errorMessage);
    // ...
  });
