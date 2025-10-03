import { Component, AfterViewInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { getAuth } from 'firebase/auth';

declare var firebaseui: any;
declare var firebase: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  private router = inject(Router);
  private firestore = inject(Firestore);

  ngAfterViewInit(): void {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());

    const uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        {
          provider: 'google.com',
          scopes: ['email']
        }
      ],
      tosUrl: '', // Terms of Service (optional)
      privacyPolicyUrl: '', // Privacy Policy (optional)
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      callbacks: {
        signInSuccessWithAuthResult: async (authResult: any, redirectUrl: string) => {
          const user = authResult.user;

          // ✅ Store user in Firestore under /users/{uid}
          const userRef = doc(this.firestore, `users/${user.uid}`);
          await setDoc(userRef, {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          }, { merge: true });

          // ✅ Redirect to dashboard
          this.router.navigate(['/dashboard']);
          return false; // Prevent default redirect
        }
      }
    };

    ui.start('#firebaseui-auth-container', uiConfig);
  }
}
