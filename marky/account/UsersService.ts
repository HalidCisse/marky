import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs/Rx';
import {User} from '../models/User';


/**
 * UserService manages our current user
 */
@Injectable()
export class UsersService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export var usersServiceInjectable: Array<any> = [
  UsersService
];
