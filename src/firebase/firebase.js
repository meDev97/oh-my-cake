import app from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";

import { firebaseConfig } from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.firestore = app.firestore();
    this.auth = app.auth();
    this.db = app.database();
  }
  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    await newUser.user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        firebase.db.ref("users").child(newUser.user.uid).set({
          name: newUser.user.displayName,
        });
      });
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async logOut() {
    await this.auth.signOut();
  }
  async restPassword(email) {
    await this.auth.sendPasswordResetEmail(email);
  }
}
const firebase = new Firebase();
export default firebase;
