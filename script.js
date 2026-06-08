```javascript id="8p2euw"
// =================================
// TABLEAU EMBEDS
// =================================

const vizElements =
    document.querySelectorAll('.tableauViz');

vizElements.forEach(viz => {

    viz.style.width = '100%';
    viz.style.height = '900px';

});

// Load Tableau API

const scriptElement =
    document.createElement('script');

scriptElement.src =
    'https://public.tableau.com/javascripts/api/viz_v1.js';

document.body.appendChild(scriptElement);


// =================================
// SMOOTH NAVIGATION ACTIVE STATE
// =================================

const navLinks =
    document.querySelectorAll('.navbar nav a');

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        navLinks.forEach(item => {
            item.classList.remove('active-nav');
        });

        link.classList.add('active-nav');

    });

});


// =================================
// REVEAL ANIMATIONS
// =================================

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('show');

                }

            });

        },

        {
            threshold: 0.15
        }

    );

document
    .querySelectorAll(
        '.method-card, .dashboard-story, .finding-card, .limitations-card'
    )
    .forEach(element => {

        element.classList.add('hidden');

        observer.observe(element);

    });
```
