import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMedicalData, IMappedMedicalData } from '../interfaces/medical-data.interface';
import { MedicalDataService } from '../services/medical-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { mapWidgetData } from './dashboard-config';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styles: [],
})
export class DashboardComponent implements OnInit {
    $data: Observable<IMedicalData[]>;
    form: FormGroup;

    options: string[];
    regionData: IMedicalData[] | IMappedMedicalData;
    medicalData: IMedicalData[];

    constructor(private medicalDataService: MedicalDataService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.$data = this.medicalDataService.$medicalData.pipe(
            tap((medData: IMedicalData[]) => {
                this.options = medData.map((list: IMedicalData) => this.mapFilteredRegionData(list));
                this.medicalData = medData;
            })
        );
    }

    private mapFilteredRegionData({ region }): string {
        return region;
    }

    setFilteredByRegion(state: string): void {
        this.regionData = this.medicalData.filter((medData: IMedicalData) => medData.region === state);
        this.regionData.map((medData: IMedicalData) => (this.regionData = this.mapWidgetDataDashboard(medData)));
    }

    private mapWidgetDataDashboard(data: IMedicalData): IMappedMedicalData {
        return mapWidgetData(data);
    }
}
