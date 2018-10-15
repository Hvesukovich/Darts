import { Component, Input } from '@angular/core';
import { IParticipant, IStep } from '../participants-interfaces';

@Component({
    selector: 'app-participant-on-board',
    templateUrl: './participant-on-board.component.html',
    styleUrls: ['./participant-on-board.component.scss']
})
export class ParticipantOnBoardComponent {
    @Input() participant: IParticipant;

    constructor() {
    }

    validation(throwData: IStep) {
        const points = throwData.points;
        if (!isNaN(points) && points >= 0 && points < 51 && points !== null) {
            throwData.error = false;
        } else {
            throwData.error = true;
        }
    }


    getArrBtns(data: IStep) {
        const arrBtns = [];
        let classes = 'btn';
        for (let i = 0; i < data.numberOfShots; i++) {
            if (i === data.numberOfShots - 1) {
                classes = 'btn btn-right';
            }
            arrBtns.push({
                'value': i + 1,
                'classes': classes
            });
        }
        return arrBtns;

    }

    activeBtn(throwData: IStep, coefficient: number) {
        throwData.coefficient = coefficient;
    }

}
