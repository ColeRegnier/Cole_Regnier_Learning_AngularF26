import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { GuardService } from '../guard-service';

//idiot name
export const editGuardGuard: CanActivateFn = () => {
  const guard = inject(GuardService)
  const canEdit = false;
  const router = inject(Router);
  // returns the redirect url if guard is set to false stopping people from acessing pages they shouldnt. when set to true allows them to acess
  return guard.guardEnabled() ? router.parseUrl('/countries') : true

};
