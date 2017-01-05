import { uuid } from '../utils/uuid';

export class User {
    constructor(
        public id: string,
        public username: string,
        public email: string,
        public password: string
        ) {
            this.id = id || uuid();
        }
}
