'use strict';

$(function () {
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

    // const homeSection = $('#home').offset().top;
    // const aboutSection = $('#about').offset().top - 300;
    // const portfolioSection = $('#portfolio').offset().top - 300;
    // const skillsSection = $('#skills').offset().top - 300;
    // const contactSection = $('#contact').offset().top - 300;

    // console.log(aboutSection);
    // console.log(portfolioSection);
    // console.log(skillsSection);
    // console.log(contactSection);

    var homeSectionTop = $('#home').offset().top;
    var aboutSectionTop = $('#about').offset().top;
    var portfolioSectionTop = $('#portfolio').offset().top;
    var skillsSectionTop = $('#skills').offset().top;
    var contactSectionTop = $('#contact').offset().top;

    var homeSectionBottom = $('#home').offset().top + $('#home').outerHeight(true);
    var aboutSectionBottom = $('#about').offset().top + $('#about').outerHeight(true);
    var portfolioSectionBottom = $('#portfolio').offset().top + $('#portfolio').outerHeight(true);
    var skillsSectionBottom = $('#skills').offset().top + $('#skills').outerHeight(true);
    var contactSectionBottom = $('#contact').offset().top + $('#contact').outerHeight(true);

    $(document).scroll(function () {
        var scrollPosition = $(document).scrollTop();
        if (scrollPosition >= homeSection && scrollPosition < aboutSection) {
            $('#sectionName').text(' ');
        } else if (scrollPosition >= aboutSection && scrollPosition <= portfolioSection) {
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