// =================================
// ACTIVE NAVIGATION LINKS
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