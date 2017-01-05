import { uuid } from '../utils/uuid';

export class Document {
    constructor(
        public id?: string,
        public author?: string,
        public text?: string
        ) {
            this.id = id || uuid();
        }
}
