import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService } from '../storage.service';
import { IParticipant } from '../participants-interfaces';

import { Router } from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    registrationForm: FormGroup;
    constructor(private storageService: StorageService, private router: Router) {
        this.registrationForm = new FormGroup({
            'nickName': new FormControl('', [
                Validators.required,
                Validators.maxLength(20)
            ]),
            'email': new FormControl('', [
                Validators.email
            ])
        });
    }

    submit(value: IParticipant) {
        this.storageService.addParticipant(value);
        this.router.navigate(['/start']);
    }

    ngOnInit() {
    }

}
