import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDK9mM6LsZkET6dmAQ0jo1B5E8CB4uI1sI',
  authDomain: 'music-e4f93.firebaseapp.com',
  projectId: 'music-e4f93',
  storageBucket: 'music-e4f93.appspot.com',
  appId: '1:21044494287:web:1bcab2013d4f2655d7dcba',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
