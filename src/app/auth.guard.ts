import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return new Promise<boolean>((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); // stop listening
      if (user) {
        resolve(true);
      } else {
        router.navigate(['/login']);
        resolve(false);
      }
    });
  });
};
// This guard checks if the user is authenticated before allowing access to certain routes.