import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialsModule } from './materials.module';
import { MedicalDataResolver } from './resolvers/medical-data.resolver';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { ViewFormComponent } from './dashboard/view-form/view-form.component';
import { ChartComponent } from './dashboard/chart/chart.component';
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
    declarations: [AppComponent, DashboardComponent, ViewFormComponent, ChartComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialsModule,
        ReactiveFormsModule,
        FusionChartsModule,
    ],
    providers: [MedicalDataResolver],
    bootstrap: [AppComponent],
})
export class AppModule {}
