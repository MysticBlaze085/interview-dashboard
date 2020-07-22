export const mapWidgetData = (params) => {
    const {
        atleast_one_measure,
        immunization_measure,
        reportable_lab_results_measure,
        syndromic_surveillance_measure,
        registry_measure,
    } = params;
    return {
        chart: {
            showValues: '1',
            rotateValues: '1',
            theme: 'fusion',
            xAxisName: 'Statistic',
            yAxisName: 'Measure',
        },
        data: [
            {
                title: 'At Least One Measure',
                value: atleast_one_measure,
                displayValue: 'At Least One Measure',
            },
            {
                title: 'Immunization Measure',
                value: immunization_measure,
                displayValue: 'Immunization Measure',
            },
            {
                title: 'Reportable Results',
                value: reportable_lab_results_measure,
                displayValue: 'Reportable Results',
            },
            {
                title: 'Syndromic Measure',
                value: syndromic_surveillance_measure,
                displayValue: 'Syndromic Measure',
            },
            {
                title: 'Registry Measure',
                value: registry_measure,
                displayValue: 'Registry Measure',
            },
        ],
    };
};
