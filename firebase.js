import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDutA6UWUFGcsmin-kYaomGALu4a4fv0cI",
  authDomain: "facebook-clone-efe56.firebaseapp.com",
  projectId: "facebook-clone-efe56",
  storageBucket: "facebook-clone-efe56.appspot.com",
  messagingSenderId: "833758085055",
  appId: "1:833758085055:web:1c4379e4b75780a3ef2b0a"
};

const app = !firebase.apps.length? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()
const storage = firebase.storage();

export {db, storage};