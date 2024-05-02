import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from './_services/users.service';

export const userGuardGuard: CanActivateFn = (route, state) => {

  let userService = inject(UsersService).isLoggedIn();
  if(!userService) {
    inject(Router).navigate(['/']).then();
  }
  return userService;
};
