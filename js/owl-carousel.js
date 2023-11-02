$(document).ready(function(){
    $(".slide-one").owlCarousel({
        margin: 60,
        responsive: {
            0 :{
                items: 2,
            },
            500 :{
                items: 3,
            },
            768 :{
                items: 4,
            },
            1024 :{
                items: 5,
            },
            1200 :{
                items: 6,
            },
        },
    });

    $(".slide-two").owlCarousel({
        margin: 30,
        responsive: {
            0 :{
                items: 1,
            },
            500 :{
                items: 2,
            },
            992 : {
                items: 3,
            }
        },
    });

    $(".slide-three").owlCarousel({
        margin: 10,
        responsive: {
            0 :{
                items: 1,
            },
            500 :{
                items: 2,
            },
            800 :{
                items: 3,
            },
            1100: {
                items: 4,
            },
        },
    });

    $(".slide-four").owlCarousel({
        margin: 10,
        responsive: {
            0 :{
                items: 1,
            },
            500 :{
                items: 2,
            },
            768 :{
                items: 3,
            },
            992: {
                items: 4,
            },
            1250: {
                items: 5,
            }
        },
    });

    $(".slide-five").owlCarousel({
        margin: 30,
        responsive: {
            0 :{
                items: 1,
            },
            700 :{
                items: 2,
            },
            1050 : {
                items: 3,
            },
            1400: {
                items: 4,
            }
        },
    });
});