$('.slick-slider').slick({
    dots:true,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                // arrows: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

//galeria

var rewaLi = document.getElementById('rewaText');

document.getElementById('rewaPhoto').onmouseenter = function(){
    console.log("toooo");
    rewaLi.style.display = "inline";
};

document.getElementById('rewaPhoto').onmouseleave = function(){
    console.log("toooo");
    rewaLi.style.display = "none";
};

var hawaiiLi = document.getElementById('hawaiiText');

document.getElementById('hawaiiPhoto').onmouseenter = function(){
    console.log("toooo");
    hawaiiLi.style.display = "inline";
};

document.getElementById('hawaiiPhoto').onmouseleave = function(){
    console.log("toooo");
    hawaiiLi.style.display = "none";
};

var fijiLi = document.getElementById('fijiText');

document.getElementById('fijiPhoto').onmouseenter = function(){
    console.log("toooo");
    fijiLi.style.display = "inline";
};

document.getElementById('fijiPhoto').onmouseleave = function(){
    console.log("toooo");
    fijiLi.style.display = "none";
};

var capetowneLi = document.getElementById('capetownText');

document.getElementById('capetownPhoto').onmouseenter = function(){
    console.log("toooo");
    capetowneLi.style.display = "inline";
};

document.getElementById('capetownPhoto').onmouseleave = function(){
    console.log("toooo");
    capetowneLi.style.display = "none";
};


// płynne przejście

$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
