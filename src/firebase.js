
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB_UsP7axxufwnB0H3oOV5wRZupVYi9rkY",
    authDomain: "clone-612ee.firebaseapp.com",
    projectId: "clone-612ee",
    storageBucket: "clone-612ee.appspot.com",
    messagingSenderId: "102585179383",
    appId: "1:102585179383:web:47a6be2188d161623c07f2"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()

  export {db,auth,provider}