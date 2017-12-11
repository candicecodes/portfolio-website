$(function() {
    var scroll = new SmoothScroll('a[href*="#about"]', {
        speed: 1000,
        easing: 'easeInOutCubic',
        offset: 90    
    });

    var scroll = new SmoothScroll('a[href*="#portfolio"]', {
        speed: 1000,
        easing: 'easeInOutCubic',
        offset: 90
    });

    var scroll = new SmoothScroll('a[href*="#skills"]', {
        speed: 1000,
        easing: 'easeInOutCubic',
        offset: 90
    });

    var scroll = new SmoothScroll('a[href*="#contact"]', {
        speed: 1000,
        easing: 'easeInOutCubic',
        offset: 90
    });

    const homeSection = $('#home').offset().top;
    const aboutSection = $('#about').offset().top;
    const portfolioSection = $('#portfolio').offset().top;
    const skillsSection = $('#skills').offset().top;
    const contactSection = $('#contact').offset().top;

    $(document).scroll(function() {
        let scrollPosition = $(document).scrollTop();
        if(scrollPosition >= homeSection && scrollPosition < aboutSection) {
            $('#sectionName').text(' ');
        } else if (scrollPosition >= aboutSection && scrollPosition < portfolioSection) {
            $('#sectionName').text('About');
        } else if (scrollPosition >= portfolioSection && scrollPosition < skillsSection) {
            $('#sectionName').text('Portfolio');
        } else if (scrollPosition >= skillsSection && scrollPosition < contactSection) {
            $('#sectionName').text('Skills');
         
        } else if (scrollPosition >= contactSection) {
            $('#sectionName').text('Contact');
        }

    });
});