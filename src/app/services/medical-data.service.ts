import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { IMedicalData } from '../interfaces/medical-data.interface';

@Injectable({
    providedIn: 'root',
})
export class MedicalDataService {
    private medicalData: BehaviorSubject<IMedicalData[]> = new BehaviorSubject([]);
    $medicalData: Observable<IMedicalData[]> = this.medicalData.asObservable();
    constructor(private http: HttpClient) {}

    getAllMedicalData(): Observable<any> {
        return this.http.get(`https://dashboard.healthit.gov/api/open-api.php?source=hospital-mu-public-health-measures.csv`).pipe(
            tap((res) => {
                const filterByyear = res.filter((response) => response.period === '2015');
                this.medicalData.next(filterByyear);
            })
        );
    }
}
