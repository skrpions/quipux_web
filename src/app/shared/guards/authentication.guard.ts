import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthApplication } from 'src/app/routes/auth/application/auth-application';

export const authenticationGuard: CanActivateFn = (route, state) => {

   // Your guard logic goes here
   const router: Router = inject(Router);

   // Check if the user is authenticated
   if (userAuthenticated()) {
     return true;
   } else {
     // Redirect the user to the login page with the return URL
     return router.createUrlTree(['/'], { queryParams: { retUrl: state.url } });
   }
 };

 // Helper function to check if the user is authenticated
 function userAuthenticated(): boolean {

  const auth: any = inject(AuthApplication);
  const isLogged = true;
  //const isLogged = auth.isUserLogged; // TODO: Cuando no haya problema de cors, debo descomentar esta linea

  if (!isLogged) {
    return auth.logout();
  }
   return isLogged;
};
