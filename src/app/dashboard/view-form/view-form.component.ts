import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IMappedMedicalData } from 'src/app/interfaces/medical-data.interface';

@Component({
    selector: 'app-view-form',
    templateUrl: './view-form.component.html',
    styleUrls: ['./view-form.component.scss'],
})
export class ViewFormComponent implements OnInit {
    @Input() options: string[] = [];
    @Input() viewData: IMappedMedicalData;

    @Output() filterState: EventEmitter<string> = new EventEmitter();

    form: FormGroup;
    viewTitle: string;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.buildForm();
        this.setDefaultSelectValue();
    }

    buildForm(): void {
        this.form = this.fb.group({
            state: '',
        });
    }

    setDefaultSelectValue(): void {
        setTimeout(() => {
            this.form.get('state').setValue(this.options[0]);
            this.filter(this.options[0]);
        }, 1000);
    }

    filter(state: string): void {
        this.viewTitle = state;
        this.filterState.emit(state);
    }
}
