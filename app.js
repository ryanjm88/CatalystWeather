var APIkey = "8b076f5b1b5730cd519b838268d9d96c";
$("#results").hide();

//City Name Query
$("#submit1").on("click", function (event) {
    event.preventDefault();
    $("#results").show();
    var cityName = $("#cityNombre").val().trim();
    console.log(cityName);

    var queryURL1 = "https://api.openweathermap.org/data/2.5/forecast?" +
        "q=" + cityName + "&units=imperial&apikey=" + APIkey;

    $.ajax({
        url: queryURL1,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.list[1].main.temp); // 9am temp - day 1
        console.log(response.list[3].main.temp); // 3pm temp - day 1
        console.log(response.list[5].main.temp); // 9pm temp - day 1

        console.log(response.list[1].main.humidity); // 9am humidity - day 1
        console.log(response.list[3].main.humidity); // 3pm humidity - day 1
        console.log(response.list[5].main.humidity); // 9pm humidity - day 1

        console.log(response.list[1].weather[0].description); // 9am conditions - day 1
        console.log(response.list[3].weather[0].description); // 3pm conditions - day 1
        console.log(response.list[5].weather[0].description); // 9pm conditions - day 1

        //Days
        var day1 = moment(response.list[1].dt_txt).format('dddd');
        $("#day1").html(day1);
        var day2 = moment(response.list[3].dt_txt).format('dddd');
        $("#day2").html(day2);
        var day3 = moment(response.list[5].dt_txt).format('dddd');
        $("#day3").html(day3);
        var day4 = moment(response.list[9].dt_txt).format('dddd');
        $("#day4").html(day4);
        var day5 = moment(response.list[11].dt_txt).format('dddd');
        $("#day5").html(day5);
        var day6 = moment(response.list[13].dt_txt).format('dddd');
        $("#day6").html(day6);
        var day7 = moment(response.list[17].dt_txt).format('dddd');
        $("#day7").html(day7);
        var day8 = moment(response.list[19].dt_txt).format('dddd');
        $("#day8").html(day8);
        var day9 = moment(response.list[21].dt_txt).format('dddd');
        $("#day9").html(day9);
        var day10 = moment(response.list[25].dt_txt).format('dddd');
        $("#day10").html(day10);
        var day11 = moment(response.list[27].dt_txt).format('dddd');
        $("#day11").html(day11);
        var day12 = moment(response.list[29].dt_txt).format('dddd');
        $("#day12").html(day12);

        //Times
        var time1 = moment(response.list[1].dt_txt).format('hh:mm');
        $("#time1").html(time1);
        var time2 = moment(response.list[3].dt_txt).format('hh:mm');
        $("#time2").html(time2);
        var time3 = moment(response.list[5].dt_txt).format('hh:mm');
        $("#time3").html(time3);
        var time4 = moment(response.list[9].dt_txt).format('hh:mm');
        $("#time4").html(time4);
        var time5 = moment(response.list[11].dt_txt).format('hh:mm');
        $("#time5").html(time5);
        var time6 = moment(response.list[13].dt_txt).format('hh:mm');
        $("#time6").html(time6);
        var time7 = moment(response.list[17].dt_txt).format('hh:mm');
        $("#time7").html(time7);
        var time8 = moment(response.list[19].dt_txt).format('hh:mm');
        $("#time8").html(time8);
        var time9 = moment(response.list[21].dt_txt).format('hh:mm');
        $("#time9").html(time9);
        var time10 = moment(response.list[25].dt_txt).format('hh:mm');
        $("#time10").html(time10);
        var time11 = moment(response.list[27].dt_txt).format('hh:mm');
        $("#time11").html(time11);
        var time12 = moment(response.list[29].dt_txt).format('hh:mm');
        $("#time12").html(time12);

        //Tempuratures
        var temp1 = response.list[1].main.temp;
        $("#temp1").html(temp1).append(" F");
        var temp2 = response.list[3].main.temp;
        $("#temp2").html(temp2).append(" F");
        var temp3 = response.list[5].main.temp;
        $("#temp3").html(temp3).append(" F");
        var temp4 = response.list[9].main.temp;
        $("#temp4").html(temp4).append(" F");
        var temp5 = response.list[11].main.temp;
        $("#temp5").html(temp5).append(" F");
        var temp6 = response.list[13].main.temp;
        $("#temp6").html(temp6).append(" F");
        var temp7 = response.list[17].main.temp;
        $("#temp7").html(temp7).append(" F");
        var temp8 = response.list[19].main.temp;
        $("#temp8").html(temp8).append(" F");
        var temp9 = response.list[21].main.temp;
        $("#temp9").html(temp9).append(" F");
        var temp10 = response.list[25].main.temp;
        $("#temp10").html(temp10).append(" F");
        var temp11 = response.list[27].main.temp;
        $("#temp11").html(temp11).append(" F");
        var temp12 = response.list[29].main.temp;
        $("#temp12").html(temp12).append(" F");

        //Humidity
        var humid1 = response.list[1].main.humidity;
        $("#humid1").html(humid1).append(" %").prepend("Humidity: ");
        var humid2 = response.list[3].main.humidity;
        $("#humid2").html(humid2).append(" %").prepend("Humidity: ");
        var humid3 = response.list[5].main.humidity;
        $("#humid3").html(humid3).append(" %").prepend("Humidity: ");
        var humid4 = response.list[9].main.humidity;
        $("#humid4").html(humid4).append(" %").prepend("Humidity: ");
        var humid5 = response.list[11].main.humidity;
        $("#humid5").html(humid5).append(" %").prepend("Humidity: ");
        var humid6 = response.list[13].main.humidity;
        $("#humid6").html(humid6).append(" %").prepend("Humidity: ");
        var humid7 = response.list[17].main.humidity;
        $("#humid7").html(humid7).append(" %").prepend("Humidity: ");
        var humid8 = response.list[19].main.humidity;
        $("#humid8").html(humid8).append(" %").prepend("Humidity: ");
        var humid9 = response.list[21].main.humidity;
        $("#humid9").html(humid9).append(" %").prepend("Humidity: ");
        var humid10 = response.list[25].main.humidity;
        $("#humid10").html(humid10).append(" %").prepend("Humidity: ");
        var humid11 = response.list[27].main.humidity;
        $("#humid11").html(humid11).append(" %").prepend("Humidity: ");
        var humid12 = response.list[29].main.humidity;
        $("#humid12").html(humid12).append(" %").prepend("Humidity: ");

        //Conditions
        var cond1 = response.list[1].weather[0].description;
        $("#cond1").html(cond1);
        var cond2 = response.list[3].weather[0].description;
        $("#cond2").html(cond2);
        var cond3 = response.list[5].weather[0].description;
        $("#cond3").html(cond3);
        var cond4 = response.list[9].weather[0].description;
        $("#cond4").html(cond4);
        var cond5 = response.list[11].weather[0].description;
        $("#cond5").html(cond5);
        var cond6 = response.list[13].weather[0].description;
        $("#cond6").html(cond6);
        var cond7 = response.list[17].weather[0].description;
        $("#cond7").html(cond7);
        var cond8 = response.list[19].weather[0].description;
        $("#cond8").html(cond8);
        var cond9 = response.list[21].weather[0].description;
        $("#cond9").html(cond9);
        var cond10 = response.list[25].weather[0].description;
        $("#cond10").html(cond10);
        var cond11 = response.list[27].weather[0].description;
        $("#cond11").html(cond11);
        var cond12 = response.list[29].weather[0].description;
        $("#cond12").html(cond12);
    });

});

//ZIP Code Query
$("#submit2").on("click", function (event) {
    event.preventDefault();
    $("#results").show();
    var cityZip = $("#zipCode").val().trim();
    console.log(cityZip);

    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?" +
        "zip=" + cityZip + "&units=imperial&apikey=" + APIkey;

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        //Days
        var day1 = moment(response.list[1].dt_txt).format('dddd');
        $("#day1").html(day1);
        var day2 = moment(response.list[3].dt_txt).format('dddd');
        $("#day2").html(day2);
        var day3 = moment(response.list[5].dt_txt).format('dddd');
        $("#day3").html(day3);
        var day4 = moment(response.list[9].dt_txt).format('dddd');
        $("#day4").html(day4);
        var day5 = moment(response.list[11].dt_txt).format('dddd');
        $("#day5").html(day5);
        var day6 = moment(response.list[13].dt_txt).format('dddd');
        $("#day6").html(day6);
        var day7 = moment(response.list[17].dt_txt).format('dddd');
        $("#day7").html(day7);
        var day8 = moment(response.list[19].dt_txt).format('dddd');
        $("#day8").html(day8);
        var day9 = moment(response.list[21].dt_txt).format('dddd');
        $("#day9").html(day9);
        var day10 = moment(response.list[25].dt_txt).format('dddd');
        $("#day10").html(day10);
        var day11 = moment(response.list[27].dt_txt).format('dddd');
        $("#day11").html(day11);
        var day12 = moment(response.list[29].dt_txt).format('dddd');
        $("#day12").html(day12);

        //Times
        var time1 = moment(response.list[1].dt_txt).format('hh:mm');
        $("#time1").html(time1);
        var time2 = moment(response.list[3].dt_txt).format('hh:mm');
        $("#time2").html(time2);
        var time3 = moment(response.list[5].dt_txt).format('hh:mm');
        $("#time3").html(time3);
        var time4 = moment(response.list[9].dt_txt).format('hh:mm');
        $("#time4").html(time4);
        var time5 = moment(response.list[11].dt_txt).format('hh:mm');
        $("#time5").html(time5);
        var time6 = moment(response.list[13].dt_txt).format('hh:mm');
        $("#time6").html(time6);
        var time7 = moment(response.list[17].dt_txt).format('hh:mm');
        $("#time7").html(time7);
        var time8 = moment(response.list[19].dt_txt).format('hh:mm');
        $("#time8").html(time8);
        var time9 = moment(response.list[21].dt_txt).format('hh:mm');
        $("#time9").html(time9);
        var time10 = moment(response.list[25].dt_txt).format('hh:mm');
        $("#time10").html(time10);
        var time11 = moment(response.list[27].dt_txt).format('hh:mm');
        $("#time11").html(time11);
        var time12 = moment(response.list[29].dt_txt).format('hh:mm');
        $("#time12").html(time12);

        //Tempuratures
        var temp1 = response.list[1].main.temp;
        $("#temp1").html(temp1).append(" F");
        var temp2 = response.list[3].main.temp;
        $("#temp2").html(temp2).append(" F");
        var temp3 = response.list[5].main.temp;
        $("#temp3").html(temp3).append(" F");
        var temp4 = response.list[9].main.temp;
        $("#temp4").html(temp4).append(" F");
        var temp5 = response.list[11].main.temp;
        $("#temp5").html(temp5).append(" F");
        var temp6 = response.list[13].main.temp;
        $("#temp6").html(temp6).append(" F");
        var temp7 = response.list[17].main.temp;
        $("#temp7").html(temp7).append(" F");
        var temp8 = response.list[19].main.temp;
        $("#temp8").html(temp8).append(" F");
        var temp9 = response.list[21].main.temp;
        $("#temp9").html(temp9).append(" F");
        var temp10 = response.list[25].main.temp;
        $("#temp10").html(temp10).append(" F");
        var temp11 = response.list[27].main.temp;
        $("#temp11").html(temp11).append(" F");
        var temp12 = response.list[29].main.temp;
        $("#temp12").html(temp12).append(" F");


        //Humidity
        var humid1 = response.list[1].main.humidity;
        $("#humid1").html(humid1).append(" %").prepend("Humidity: ");
        var humid2 = response.list[3].main.humidity;
        $("#humid2").html(humid2).append(" %").prepend("Humidity: ");
        var humid3 = response.list[5].main.humidity;
        $("#humid3").html(humid3).append(" %").prepend("Humidity: ");
        var humid4 = response.list[9].main.humidity;
        $("#humid4").html(humid4).append(" %").prepend("Humidity: ");
        var humid5 = response.list[11].main.humidity;
        $("#humid5").html(humid5).append(" %").prepend("Humidity: ");
        var humid6 = response.list[13].main.humidity;
        $("#humid6").html(humid6).append(" %").prepend("Humidity: ");
        var humid7 = response.list[17].main.humidity;
        $("#humid7").html(humid7).append(" %").prepend("Humidity: ");
        var humid8 = response.list[19].main.humidity;
        $("#humid8").html(humid8).append(" %").prepend("Humidity: ");
        var humid9 = response.list[21].main.humidity;
        $("#humid9").html(humid9).append(" %").prepend("Humidity: ");
        var humid10 = response.list[25].main.humidity;
        $("#humid10").html(humid10).append(" %").prepend("Humidity: ");
        var humid11 = response.list[27].main.humidity;
        $("#humid11").html(humid11).append(" %").prepend("Humidity: ");
        var humid12 = response.list[29].main.humidity;
        $("#humid12").html(humid12).append(" %").prepend("Humidity: ");

        //Conditions
        var cond1 = response.list[1].weather[0].description;
        $("#cond1").html(cond1);
        var cond2 = response.list[3].weather[0].description;
        $("#cond2").html(cond2);
        var cond3 = response.list[5].weather[0].description;
        $("#cond3").html(cond3);
        var cond4 = response.list[9].weather[0].description;
        $("#cond4").html(cond4);
        var cond5 = response.list[11].weather[0].description;
        $("#cond5").html(cond5);
        var cond6 = response.list[13].weather[0].description;
        $("#cond6").html(cond6);
        var cond7 = response.list[17].weather[0].description;
        $("#cond7").html(cond7);
        var cond8 = response.list[19].weather[0].description;
        $("#cond8").html(cond8);
        var cond9 = response.list[21].weather[0].description;
        $("#cond9").html(cond9);
        var cond10 = response.list[25].weather[0].description;
        $("#cond10").html(cond10);
        var cond11 = response.list[27].weather[0].description;
        $("#cond11").html(cond11);
        var cond12 = response.list[29].weather[0].description;
        $("#cond12").html(cond12);
    });
});