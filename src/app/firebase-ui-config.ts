import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';

export const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // add more options here if needed, like Email/Password:
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '', // optional
  privacyPolicyUrl: '', // optional
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};
