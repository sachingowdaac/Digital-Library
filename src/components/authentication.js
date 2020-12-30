import { auth } from '../firebase';

export const SignUpUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const SignOut = (e) => {
  e.preventDefault();
  return auth.signOut();
};

export const LoginUser = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};
