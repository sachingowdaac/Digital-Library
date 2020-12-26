import { auth } from '../firebase';

auth.onAuthStateChanged((user) => {
  if (user) {
  }
});
export const SignUpUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const SignOut = (e) => {
  e.preventDefault();
  return auth.signOut().then(() => {
    console.log('user sign out');
  });
};

export const LoginUser = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};
