import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCaJaTsPfDwmdxOOzRXcs8K5U-l4xU",
  authDomain: "bandl-b7a7.firebaseapp.com",
  databaseURL: "https/bandler-b7a76.firebaseio.com",
  projectId: "bandler-b76",
  storageBucket: "bandler-7a76.appspot.com",
  messagingSenderId: "786593155"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
