const ctx = document.getElementById('pieChart');

new Chart(ctx, {

    type: 'pie',

    data: {

        labels: [
            'Agree',
            'Disagree',
            'Neutral'
        ],

        datasets: [{

            data: [52, 28, 20],

            backgroundColor: [
                '#66bb6a',
                '#ef5350',
                '#bdbdbd'
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