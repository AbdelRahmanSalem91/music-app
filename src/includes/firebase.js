import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDK9mM6LsZkET6dmAQ0jo1B5E8CB4uI1sI',
  authDomain: 'music-e4f93.firebaseapp.com',
  projectId: 'music-e4f93',
  storageBucket: 'music-e4f93.appspot.com',
  appId: '1:21044494287:web:1bcab2013d4f2655d7dcba',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export const usersCollection = db.collection('users');
export const songsCollection = db.collection('songs');
