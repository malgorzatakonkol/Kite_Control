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



    divWeather.on("mouseenter", function (){
        var dataWeatherId = $(this).data("id");
        var thisDiv = $(this);
        $.ajax({
            url: weatherUrl + dataWeatherId + apiKey,
            method: "GET"
        }).done(function(response) {
            console.log(response);
            var temp = response.main.temp;
            temp = Math.round(temp-273);
            console.log(temp);
            thisDiv.find('p.temp').text(temp + " °C");
            // temp.addClass('info');

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

        }).fail(function(error) {
            console.log(error);
        });
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

});