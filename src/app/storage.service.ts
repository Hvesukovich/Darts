import { Injectable } from '@angular/core';
import { IArrThrow, IGame, IParticipant, IStep } from './participants-interfaces';
import { ParticipantClass } from './participant-class';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    PARTICIPANTS = [
        new ParticipantClass('Sherlock Holmes', 'sherlock.holmes@gmail.com'),
        new ParticipantClass('Dr. John Watson', 'dr.john.watson@gmail.com'),
        new ParticipantClass('Mrs. Stubbs', 'stubbs@gmail.com'),
        new ParticipantClass('Jim Morianty', 'jim.morianty@gmail.com')
    ];
    GAMES = [
        { 'name': '501', 'value': 501, 'mainSteps': 20, 'secondarySteps': 10 },
        { 'name': '301', 'value': 301, 'mainSteps': 20, 'secondarySteps': 10 }
    ];
    maxSteps: number | boolean;
    winners: IParticipant[];
    nemeNameWinner: string;

    throws: number;
    numberOfShots: number;
    coefficient: number;

    games: IGame[];
    arrThrows: IArrThrow[];

    participants: IParticipant[];
    activeGames: IGame;

    constructor() {
        this.throws = 3;
        this.numberOfShots = 3;
        this.coefficient = 2;

        this.participants = [];
        this.participants = this.PARTICIPANTS;
        this.games = this.GAMES;
        this.arrThrows = [];
        this.winners = [];

    }

    addParticipant(participantData: IParticipant) {
        const participant = new ParticipantClass(participantData.nickName, participantData.email);
        this.participants.push(participant);
    }

    addPoints() {
        const steps: IStep[] = [];

        for (const participant of this.participants) {
            let points = 0;
            let winningRatio: boolean;
            participant.throws[participant.throws.length - 2].steps.forEach(step => {
                points += step.points * step.coefficient;
                if (!winningRatio) {
                    winningRatio = step.coefficient === this.coefficient ? true : false;
                }
            });

            let oldPoints: number;

            if (participant.throws.length - 2 === 0) {
                oldPoints = this.activeGames.value;
            } else {
                oldPoints = this.arrThrows[0].steps[participant.order].points;
            }

            if (oldPoints - points < 0 || oldPoints - points === 1 || (oldPoints - points === 0  && !winningRatio)) {
                points = oldPoints;
            } else {
                points = oldPoints - points;
                if (points === 0) {
                    this.winners.push(participant);
                }
            }

            steps.push({
                'points': points,
                'winningRatio': winningRatio
            });
        }
        this.arrThrows.unshift({
            'steps': steps
        });

        if (this.maxSteps && this.maxSteps === this.arrThrows.length) {
            let leaders: IParticipant[] = [];
            let minPoints = this.arrThrows[0].steps[0].points;
            for (let i = 0; i < this.arrThrows[0].steps.length; i++) {
                if (minPoints > this.arrThrows[0].steps[i].points) {
                    minPoints = this.arrThrows[0].steps[i].points;
                    leaders = [];
                    leaders.push(this.participants[i]);
                } else if (minPoints === this.arrThrows[0].steps[i].points) {
                    leaders.push(this.participants[i]);
                }
            }
            if (leaders.length > 1 && this.maxSteps < this.activeGames.mainSteps + this.activeGames.secondarySteps) {
                this.maxSteps += this.activeGames.secondarySteps;
            } else {
                this.winners = leaders;
            }
        }
    }

    cleaningData() {
        this.arrThrows = [];
        this.participants.map(participant => {
            participant.throws = [];
        });
        this.winners = [];
        this.nemeNameWinner = '';
    }
}
