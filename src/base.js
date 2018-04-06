import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAwK-eyvMtUoPjI-oy-R44QrrctMlvgIDs',
  authDomain: 'catch-of-the-day-mr-t.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-mr-t.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
