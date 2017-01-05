import {usersServiceInjectable} from '../account/UsersService';

export * from '../account/UsersService';

export var servicesInjectables: Array<any> = [
  usersServiceInjectable
];
