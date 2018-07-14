$(function () {


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



var divWeather = $('.row div');
var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?id=";
var apiKey = '&APPID=0792ae5427c864ed05425224de36e150';


    function showWeather(response, thisDiv){
        console.log(response);
        var temp = response.main.temp;
        temp = Math.round(temp-273);
        console.log(temp);
        thisDiv.find('p.temp').text(temp + " °C");

        var desc = response.weather[0].description;
        console.log(desc);
        thisDiv.find('p.desc').text(desc);

        var windSpeed = response.wind.speed;
        console.log(windSpeed);
        thisDiv.find('p.wind').text("wind " + windSpeed + " m/s");

        var weatherIcon = response.weather[0].icon;
        console.log(weatherIcon);
        thisDiv.find('img#weatherImg').attr('src', 'http://openweathermap.org/img/w/' + weatherIcon + '.png');
        thisDiv.find('img#weatherImg').attr('id', 'weatherImgg');
    }

    divWeather.on("mouseenter", function (){
        var dataWeatherId = $(this).data("id");
        var thisDiv = $(this);
        thisDiv.find(".elementToHide").attr("class", "weather"); //toggle
        $.ajax({
            url: weatherUrl + dataWeatherId + apiKey,
            method: "GET"
        }).done(function(response) {
                showWeather(response, thisDiv)
        }).fail(function(error) {
            console.log(error);
        });
    });

    divWeather.on("mouseleave", function () {
        var thisDiv = $(this);
        var elementHide = thisDiv.find(".weather");
        console.log(elementHide);
        elementHide.attr('class', 'elementToHide'); //toggle
    });

// płynne przejście


    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });

// hamburger

    $(".mcBurger").click(function() {
        $(".topsandwich").toggleClass('topsandwichstart');
        $(".meat").toggleClass("hidden");
        $(".downsandwich").toggleClass("downsandwichstart");
        console.log("tooo");
    });


    var menu = document.querySelector('.menu'),
        menuTrigger = document.querySelector('.mcBurger'),
        mobile = window.matchMedia('(max-width: 767px)');

    function mobileMatches(mobile) {
        if (mobile.matches) {
            onMobile();
        } else {
            onDesktop();
        }
    }
    mobileMatches(mobile);
    mobile.addListener( mobileMatches );

    menuTrigger.addEventListener( 'click', function(){
        menu.hidden = !menu.hidden;
    });

    function onMobile(){
        menu.hidden = true;
        menuTrigger.hidden = false;
    }

    function onDesktop(){
        menu.hidden = false;
        menuTrigger.hidden = true;
    }
});