import { Component } from '@angular/core';
import { IGame, IParticipant } from '../participants-interfaces';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-start',
    templateUrl: './page-start.component.html',
    styleUrls: ['./page-start.component.scss']
})

export class PageStartComponent {
    participants: IParticipant[];

    constructor(private storageService: StorageService, private router: Router) {
        this.getParticipants();
    }

    getParticipants() {
        this.participants = [];
        for (let i = 0; i < this.storageService.participants.length; i++) {
            this.participants.push({
                'order': i,
                'nickName': this.storageService.participants[i].nickName,
                'email': this.storageService.participants[i].email
            });
        }
    }

    search(e: any) {
        this.participants = [];
        if (e.target.value && e.target.value !== '') {
            const search = e.target.value.toLowerCase();
            for (let i = 0; i < this.storageService.participants.length; i++) {
                if (this.storageService.participants[i].nickName.toLowerCase().includes(search)) {
                    this.participants.push({
                        'order': this.storageService.participants[i].order,
                        'nickName': this.storageService.participants[i].nickName,
                        'email': this.storageService.participants[i].email
                    });
                }
            }
        } else {
            this.getParticipants();
        }
    }

    delParticipant(participant: IParticipant) {
        this.participants.splice(this.participants.indexOf(participant), 1);
        this.storageService.participants.splice(this.participants.indexOf(participant), 1);
    }

    activeGame(game: IGame) {
        this.storageService.activeGames = game;
    }

    startGame() {
        if (this.storageService.activeGames) {
            this.storageService.maxSteps = this.storageService.activeGames.mainSteps;
            this.router.navigate(['/count-points']);
        }
    }

}
