import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class UserService {

 private userDataObject = new BehaviorSubject('');
 currentUserDataObject = this.userDataObject.asObservable();

 constructor() {

 }

 updateUserDataObject(message: any) {
    this.userDataObject.next(message)
 }
}