import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyATSj6YwarLnzR7NFPKLyRV_WfE_kkGDWM',
  authDomain: 'elbrus-shows.firebaseapp.com',
  databaseURL: 'https://elbrus-shows.firebaseio.com',
  projectId: 'elbrus-shows',
  storageBucket: 'elbrus-shows.appspot.com',
  messagingSenderId: '102154575619',
  appId: '1:102154575619:web:77295ae8dc5c4bd3669336',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
