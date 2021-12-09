import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {
  constructor() {

  }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
        let localizeValue = window.localStorage.getItem('localizeLng') || '';
        if (!localizeValue || localizeValue == 'undefined') {
            return false;
        }
        else {
            return true;
        }
    }
}