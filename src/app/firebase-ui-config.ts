declare var firebaseui: any;
declare var firebase: any;

export const firebaseUiAuthConfig = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: 'google.com',
      scopes: ['email']
    }
  ],
  tosUrl: '', // optional
  privacyPolicyUrl: '', // optional
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};
export const firebaseUiAuthConfigWithEmail = {
  ...firebaseUiAuthConfig,
  signInOptions: [
    ...firebaseUiAuthConfig.signInOptions,
    {
      provider: 'password',
      requireDisplayName: false
    }
  ]
};