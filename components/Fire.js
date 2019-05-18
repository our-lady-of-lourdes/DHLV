import firebase from 'firebase'; 

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  observeAuth = () => firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        // 4.
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  // 1.
get ref() {
    return firebase.database().ref('messages');
  }
  // 2.
  on = callback =>
      this.ref
        .limitToLast(20)
        .on('child_added', snapshot => callback(this.parse(snapshot)));
  // 3.
  parse = snapshot => {
    // 1.
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    // 2.
    const timestamp = new Date(numberStamp);
    // 3.
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
   return message;
  };
  // 4.
  off() {
    this.ref.off();
  }

  // 1.
get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
  // 2.
  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  
  // 3.
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      // 4.
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };
  // 5.
  append = message => this.ref.push(message);



  init = () =>
    firebase.initializeApp({
      apiKey: "AIzaSyBXqZCt4Tk_ufgPNS4FFliLKgzVUkfEdRw",
      authDomain: "my-chat-app-99de3.firebaseapp.com",
      databaseURL: "https://my-chat-app-99de3.firebaseio.com",
      projectId: "my-chat-app-99de3",
      storageBucket: "my-chat-app-99de3.appspot.com",
      messagingSenderId: "187400992222",
      appId: "1:187400992222:web:122734c275a1f1b7"
    });
}

Fire.shared = new Fire();
export default Fire;