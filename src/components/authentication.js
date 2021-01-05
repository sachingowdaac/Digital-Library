import { auth } from '../firebase';
import { firebase } from '../firebase';

export const SignUpUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password).catch((error) => {
    alert(error.message);
  });
};

export const LoginWithGmail = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

export const LoginUser = (email, password) => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((data) => console.log(data))
    .catch((error) => {
      var errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        alert('Useremail and password does not match');
      } else if (errorCode === 'auth/user-not-found') {
        alert(error.message);
      }
    });
};

export const SignOut = (e) => {
  e.preventDefault();
  return auth.signOut();
};
