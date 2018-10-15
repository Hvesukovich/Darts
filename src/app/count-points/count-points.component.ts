import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-count-points',
    templateUrl: './count-points.component.html',
    styleUrls: ['./count-points.component.scss']
})

export class CountPointsComponent {

    constructor(public storageService: StorageService, private router: Router) {
        this.addThrow();
    }

    newGame() {
        this.storageService.cleaningData();
        this.router.navigate(['/start']);
    }

    addPoints() {
        let error: boolean;
        for (const participant of this.storageService.participants) {
            const throws = participant.throws[participant.throws.length - 1].steps;
            for (const throwData of throws) {
                if (!throwData.points || throwData.error) {
                    throwData.error = error = true;
                }
            }
        }
        if (error) {
            return;
        }
        this.addThrow();
        this.storageService.addPoints();
    }


    addThrow() {
        const participants = this.storageService.participants;
        for (let key in participants) {
            participants[key].order = parseInt(key, 10);
            const steps = [];

            for (let i = 0; i < this.storageService.throws; i++) {
                steps.push({
                    'points': null,
                    'coefficient': 1,
                    'error': false,
                    'numberOfShots': this.storageService.numberOfShots
                });
            }
            participants[key].throws.push({ steps });
        }
    }

}
