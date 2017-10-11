import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCaJaTsPkmhPfDwmdxOOzRXcs8K5U-l4xU",
  authDomain: "bandler-b7a76.firebaseapp.com",
  databaseURL: "https://bandler-b7a76.firebaseio.com",
  projectId: "bandler-b7a76",
  storageBucket: "bandler-b7a76.appspot.com",
  messagingSenderId: "7806593155"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();