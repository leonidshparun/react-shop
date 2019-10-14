import * as firebase from 'firebase/app';

import 'firebase/storage';

class FirebaseStorage {
  constructor() {
    this.storage = null;
    this.config = {
      apiKey: 'AIzaSyBnKR4TYT6qS-__-rm9i42Ck17QOyvIU-k',
      authDomain: 'react-test-50361.firebaseapp.com',
      databaseURL: 'https://react-test-50361.firebaseio.com',
      projectId: 'react-test-50361',
      storageBucket: 'react-test-50361.appspot.com',
      messagingSenderId: '590060440214',
      appId: '1:590060440214:web:8dfe5db62b7f6001f590b7'
    };
    this.cache = {};
  }

  async init() {
    firebase.initializeApp(this.config);
    this.storage = firebase.storage();
  }

  getImageURL = id => {
    if (this.cache[id]) return this.cache[id];
    const storageRef = this.storage.ref();

    const imagesRef = storageRef.child('pic');
    const fileName = `item${id}.jpg`;
    const itemRef = imagesRef.child(fileName);

    return itemRef.getDownloadURL().then(url => {
      this.cache[id] = url;
      return url;
    });
  };
}

export default new FirebaseStorage();
