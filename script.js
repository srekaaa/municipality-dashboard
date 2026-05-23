// PIE CHART

const pieCtx = document
    .getElementById('pieChart');

new Chart(pieCtx, {

    type: 'pie',

    data: {

        labels: [
            'Agree',
            'Neutral',
            'Disagree'
        ],

        datasets: [{

            data: [58, 25, 17],

            backgroundColor: [
                '#66bb6a',
                '#bdbdbd',
                '#ef5350'
            ],

            borderWidth: 0
        }]
    },

    options: {

        responsive: true,

        plugins: {

            legend: {
                position: 'bottom'
            }
        }
    }
});


// SCATTERPLOT

const scatterCtx = document
    .getElementById('scatterChart');

new Chart(scatterCtx, {

    type: 'scatter',

    data: {

        datasets: [{

            label:
                'Municipalities',

            data: [

                { x: 120, y: 62 },
                { x: 180, y: 71 },
                { x: 220, y: 79 },
                { x: 310, y: 86 },
                { x: 95, y: 58 },
                { x: 270, y: 83 },
                { x: 150, y: 69 }

            ],

            backgroundColor:
                '#7e57c2',

            pointRadius: 8
        }]
    },

    options: {

        responsive: true,

        plugins: {

            legend: {
                display: false
            }
        },

        scales: {

            x: {

                title: {

                    display: true,

                    text:
                        'Expenditure (€ per citizen)'
                }
            },

            y: {

                title: {

                    display: true,

                    text:
                        'Citizen Satisfaction (%)'
                }
            }
        }
    }
});