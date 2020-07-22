import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MedicalDataService } from '../services/medical-data.service';
import { Subscription } from 'rxjs';

@Injectable()
export class MedicalDataResolver implements Resolve<any> {
    constructor(private medicaldataService: MedicalDataService) {}

    resolve(): Subscription {
        return this.medicaldataService.getAllMedicalData().subscribe();
    }
}
