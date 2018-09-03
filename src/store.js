import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
//Reducers
// @todo

const firebaseConfig = {
  apiKey: "AIzaSyCxGjJeo8-By3c4bKlH6Z2D8Ms5934OWjw",
  authDomain: "react-firebase-183d4.firebaseapp.com",
  databaseURL: "https://react-firebase-183d4.firebaseio.com",
  projectId: "react-firebase-183d4",
  storageBucket: "react-firebase-183d4.appspot.com",
  messagingSenderId: "576567757004"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

//Init firebase instance
firebase.initializeApp(firebaseConfig);
//initialize firestore
// const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore)

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

//Create initial state
const initialState = {};

//Create store
const store =  createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;

