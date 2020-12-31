import { auth } from '../firebase';
import { firebase } from '../firebase';

export const SignUpUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const LoginWithGmail = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

export const LoginUser = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const SignOut = (e) => {
  e.preventDefault();
  return auth.signOut();
};
