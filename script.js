// =========================
// PIE CHART
// =========================

const pieCtx =
    document.getElementById('pieChart');

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

        maintainAspectRatio: false,

        plugins: {

            legend: {

                position: 'bottom',

                labels: {

                    padding: 20,

                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});


// =========================
// TAB BUTTON INTERACTIONS
// =========================

const tabs =
    document.querySelectorAll('.nav-center button');

tabs.forEach(tab => {

    tab.addEventListener('click', () => {

        tabs.forEach(btn => {
            btn.classList.remove('active');
        });

        tab.classList.add('active');

    });

});


// =========================
// CARD HOVER EFFECT
// =========================

const cards =
    document.querySelectorAll(
        '.stat-card, .large-card, .side-panel, .small-card'
    );

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transition =
            'transform 0.2s ease';

    });

});