// firebase-auth.component.ts
import { Component } from '@angular/core';
import { firebaseUiAuthConfig } from '../firebase-ui-config';

@Component({
  selector: 'app-firebase-auth',
  template: `<firebase-ui [config]="uiConfig"></firebase-ui>`,
  standalone: true,
  imports: [/* FirebaseUiAngularModule will be in app.config */],
})
export class FirebaseAuthComponent {
  uiConfig = firebaseUiAuthConfig;
}
