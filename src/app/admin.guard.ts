import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from './_services/users.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  let accessAdmin = inject(UsersService).isAdmin();
  if(!accessAdmin) {
    inject(Router).navigate(["/"]).then();
  }
  return accessAdmin;
};
