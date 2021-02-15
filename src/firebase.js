import firebase from 'firebase'
import {setUser} from './features/auth/authSlice'
import {setWorkouts} from './features/program/programSlice'
import {useDispatch} from 'react-redux'
import store from './store'

require('firebase/firestore');


const firebaseConfig = {
  apiKey: "AIzaSyCoWVvx87V2xgIKKl1mgFae_Dc2qWCM5Eg",
  authDomain: "bagi-app.firebaseapp.com",
  databaseURL: "https://bagi-app.firebaseio.com",
  projectId: "bagi-app",
  storageBucket: "bagi-app.appspot.com",
  messagingSenderId: "442973499297",
  appId: "1:442973499297:web:3447254e551980a21365e0",
  measurementId: "G-X4T4E3E72L"
};
  // const firebaseConfig = {
  //   apiKey: "AIzaSyAqNdIlJyayx`````````````WDvIJ8_CZXrzcfRf67240I",
  //      authDomain: "nowchat-test.firebaseapp.com",
  //      databaseURL: "https://nowchat-test.firebaseio.com",
  //      projectId: "nowchat-test",
  //      storageBucket: "nowchat-test.appspot.com",
  //      messagingSenderId: "585518231887",
  //      appId: "1:585518231887:web:f7e882ac577f8b9e10153a",
  //      measurementId: "G-BFS1FR4ZMS"
  // };

firebase.initializeApp(firebaseConfig);
// firebase.functions().useEmulator("localhost", 5001);
// firebase.auth().useEmulator('http://localhost:9099')
// firebase.firestore().useEmulator('http://localhost:8085')

let db = firebase.firestore()

export function createWorkout(workout = "da"){
  db.collection('workouts').add({
    title: "da"
  })
  .then(() => console.log('success'))
  .catch(() => console.log('success'))
}

export async function getWorkouts(){

let workouts = []

let workoutsSnapshot = await db.collection('workouts').get()
  workoutsSnapshot.forEach((item, i) => {
    workouts.push({...item.data(), id: item.id} )
    // console.log('item', item.id, item.data());
  });
  store.dispatch(setWorkouts(workouts))
  console.log('workouts', workouts);
}

export function saveWorkout(uid, workout){

  db.collection('users').doc(uid).set(
    {program: firebase.firestore.FieldValue.arrayUnion(workout) },
    {merge: true}
  )
  .then(() => console.log('success'))
  .catch(() => console.log('fail'))

}

export function getLastWorkout(uid){
  let userRef = db.collection('users').doc(uid)

  userRef.get()
  .then((doc) => {
    console.log(doc.data())
  })

}

export function cal(){

}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User

    user = {
      email: user.email,
      uid: user.uid
    }

    store.dispatch(setUser(user))
    console.log("usr", user);

  } else {
    console.log("signed out")
  }
});


firebase.auth().signInWithEmailAndPassword('blagojaovezoski@gmail.com', 'blagoja06')
  .then()
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(errorMessage);
    // ...
  });
