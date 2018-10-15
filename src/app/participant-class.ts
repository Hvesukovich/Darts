import { IArrThrow } from './participants-interfaces';

export class ParticipantClass {
    order: number;
    nickName: string;
    email: string;
    throws: IArrThrow[];

    constructor(nickName: string = null, email: string = null) {
        this.order = null;
        this.nickName = nickName;
        this.email = email;
        this.throws = [];
    }
}
