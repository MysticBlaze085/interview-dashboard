import { Component, Input } from '@angular/core';
import { IMappedMedicalData } from 'src/app/interfaces/medical-data.interface';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styles: [],
})
export class ChartComponent {
    @Input() chartData: IMappedMedicalData;
}
