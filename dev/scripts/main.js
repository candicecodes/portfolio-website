$(function() {
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        easing: 'easeInOutCubic',
        offset: 90    
    });

    // const homeSection = $('#home').offset().top;
    // const aboutSection = $('#about').offset().top - 95;
    // const portfolioSection = $('#portfolio').offset().top - 95;
    // const skillsSection = $('#skills').offset().top - 95;
    // const contactSection = $('#contact').offset().top - 300;

    // console.log(aboutSection);
    // console.log(portfolioSection);
    // console.log(skillsSection);
    // console.log(contactSection);

    // let homeSectionTop = $('#home').offset().top;
    // let aboutSectionTop = $('#about').offset().top;
    // let portfolioSectionTop = $('#portfolio').offset().top;
    // let skillsSectionTop = $('#skills').offset().top;
    // let contactSectionTop = $('#contact').offset().top;

    // let homeSectionBottom = $('#home').offset().top + $('#home').outerHeight(true);
    // let aboutSectionBottom = $('#about').offset().top + $('#about').outerHeight(true);
    // let portfolioSectionBottom = $('#portfolio').offset().top + $('#portfolio').outerHeight(true);
    // let skillsSectionBottom = $('#skills').offset().top + $('#skills').outerHeight(true);
    // let contactSectionBottom = $('#contact').offset().top + $('#contact').outerHeight(true);

    // $(document).scroll(function() {
    //     let scrollPosition = $(document).scrollTop();
    //     if(scrollPosition > homeSectionTop && scrollPosition < homeSectionBottom) {
    //         $('#sectionName').text(' ');
    //     } else if(scrollPosition > aboutSectionTop && scrollPosition < aboutSectionBottom) {
    //         $('#sectionName').text('About');
    //     }
    // });

    const homeSection = $("#home").offset().top - $(window).height() / 2;
    const aboutSection = $("#about").offset().top - $(window).height() / 2;
    const portfolioSection = $("#portfolio").offset().top - $(window).height() / 2;
    const skillsSection = $("#skills").offset().top - $(window).height() / 2;
    const contactSection = $("#contact").offset().top - $(window).height() / 2;

    $(document).scroll(function() {
        let scrollPosition = $(document).scrollTop();
        if(scrollPosition >= homeSection && scrollPosition < aboutSection) {
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