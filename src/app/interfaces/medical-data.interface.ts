export interface IMedicalData {
    region: string;
    region_code: string;
    period: string;
    atleast_one_measure: string;
    immunization_measure: string;
    reportable_lab_results_measure: string;
    syndromic_surveillance_measure: string;
    registry_measure: string;
    stage_2_hospitals_all_measures: string;
    stage_1_hospitals_all_measures: string;
}

export interface IMappedMedicalData {
    chart?: any;
    data: IChartData[];
}

export interface IChartData {
    title: string;
    value: string;
    displayValue: string;
}
