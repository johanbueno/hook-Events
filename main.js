var searchBtn = document.querySelector('#click');
var searchInput = document.querySelector('#inputSearch')
var city = "Pittsburgh";
var tester = document.querySelector("#theImg1");
var searchResult2 = document.querySelector("#section2");
var list = document.querySelector(".list");
var keyword = "";
var searchBtn2 = document.querySelector('#click2');
var ticketUrl = "";
var destination = "";
var image = "";
var finalDestination = document.querySelector("#end");
var buyTickets = document.querySelector('#priceBtn');
var getDirections = document.querySelector('#directions');
var imgJ = document.querySelector('#imgDetail');



// function makes list of events based on city input
function test() {

    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?city=" + city + "&segmentName=Music&apikey=db4iTGExqTBzTMvyBMO63edGOsMUS9EU";
    $.ajax({
        url: queryUrl,
        method: "GET",
        crossDomain: true,
    }).then(function (response) {
        console.log(response);
        
        $('.divider').remove();
        $('.section').remove();

        document.querySelector('#eventHeader').textContent = "Events in  " + city;
        for (var j = 0; j < 19; j++) {

        //    console.log(response._embedded.events[j]._embedded.venues[0].name);
            console.log(response._embedded.events[j].name);
            console.log(response._embedded.events[j]._embedded.venues[0].generalInfo);
            var div = document.createElement('div');
            div.setAttribute('class', "divider");
            var div2 = document.createElement('div');
            var div3 = document.createElement('div');
            div3.setAttribute('class', "col m6")
            var section = document.createElement('section');
            section.setAttribute('class', 'section');
            var h5 = document.createElement("h5");
            h5.textContent = response._embedded.events[j].name;
            var p = document.createElement("p");
            p.textContent = moment(response._embedded.events[j].dates.start.localDate).format("MMM Do YYYY");
            p.setAttribute('id', 'eventDetails');
            var button = document.createElement('button');
            button.setAttribute('class', 'buttonID');
            button.setAttribute('data-dest',response._embedded.events[j]._embedded.venues[0].name);
            button.setAttribute('data-url', response._embedded.events[j].url);
            button.setAttribute('data-image',response._embedded.events[j].images[0].url);
            button.textContent = "Event Details";
            var img = document.createElement("img");
            img.src = (response._embedded.events[j].images[0].url);
            // $(button).on("click",function (event){

            //     window.location.href = "../envent_P.html";

            // });


            document.querySelector(".list").appendChild(div).parentNode.appendChild(section).appendChild(div3).appendChild(h5).parentNode.appendChild(p).parentNode.appendChild(button).parentNode.parentNode.appendChild(div2).appendChild(img)




        }


    })



}



// pulls pictures for start screen
function test2() {

    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?&city=New York&segmentName=Music&apikey=db4iTGExqTBzTMvyBMO63edGOsMUS9EU";
    $.ajax({
        url: queryUrl,
        method: "GET",
        crossDomain: true,
    }).then(function (response) {
        // console.log(response);
        // console.log(response._embedded.events[0].images[0].url);
        var imgA = document.querySelector(".large1");
        var imgB = document.querySelector(".small1");
        var imgC = document.querySelector(".small2");
        if (imgA) {
            imgA.setAttribute("src", response._embedded.events[0].images[0].url);
        }
        if (imgB) {
            imgB.setAttribute("src", response._embedded.events[6].images[0].url);
        }
        if (imgC) {
            imgC.setAttribute("src", response._embedded.events[10].images[0].url);
        }

    }
    )
};

test2();

// pulls information and creates view of sports on click of sports on navbar
function test3() {

    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?segmentName=Sports&apikey=db4iTGExqTBzTMvyBMO63edGOsMUS9EU";
    $.ajax({
        url: queryUrl,
        method: "GET",
        crossDomain: true,
    }).then(function (response) {
        console.log(response);
        console.log(response._embedded.events[0].images[0].url);
        var sport1 = document.querySelector(".sport1");
        console.log(sport1);
        document.querySelector(".sport1").firstChild.setAttribute("src", response._embedded.events[0].images[0].url);
        document.querySelector("#sport1a").firstChild.textContent = response._embedded.events[0].name;
        document.querySelector(".sport2").firstChild.setAttribute("src", response._embedded.events[2].images[0].url);
        document.querySelector("#sport2a").firstChild.textContent = response._embedded.events[2].name;
        document.querySelector(".sport3").firstChild.setAttribute("src", response._embedded.events[4].images[0].url);
        document.querySelector("#sport3a").firstChild.textContent = response._embedded.events[4].name;
        document.querySelector(".sport4").firstChild.setAttribute("src", response._embedded.events[6].images[0].url);
        document.querySelector("#sport4a").firstChild.textContent = response._embedded.events[6].name;
        document.querySelector(".sport5").firstChild.setAttribute("src", response._embedded.events[8].images[0].url);
        document.querySelector("#sport5a").firstChild.textContent = response._embedded.events[8].name;
        document.querySelector(".sport6").firstChild.setAttribute("src", response._embedded.events[10].images[0].url);
        document.querySelector("#sport6a").firstChild.textContent = response._embedded.events[10].name;
    }
    )
};

// pulls information and creates view of concertss on click of concerts on navbar
function test4() {

    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?&city=New York&segmentName=Music&apikey=db4iTGExqTBzTMvyBMO63edGOsMUS9EU";
    $.ajax({
        url: queryUrl,
        method: "GET",
        crossDomain: true,
    }).then(function (response) {
        console.log(response);

        document.querySelector(".concert1").firstChild.setAttribute("src", response._embedded.events[0].images[0].url);
        document.querySelector("#concert1a").firstChild.textContent = response._embedded.events[0].name;
        document.querySelector(".concert2").firstChild.setAttribute("src", response._embedded.events[2].images[0].url);
        document.querySelector("#concert2a").firstChild.textContent = response._embedded.events[2].name;
        document.querySelector(".concert3").firstChild.setAttribute("src", response._embedded.events[4].images[0].url);
        document.querySelector("#concert3a").firstChild.textContent = response._embedded.events[4].name;
        document.querySelector(".concert4").firstChild.setAttribute("src", response._embedded.events[6].images[0].url);
        document.querySelector("#concert4a").firstChild.textContent = response._embedded.events[6].name;
        document.querySelector(".concert5").firstChild.setAttribute("src", response._embedded.events[8].images[0].url);
        document.querySelector("#concert5a").firstChild.textContent = response._embedded.events[8].name;
        document.querySelector(".concert6").firstChild.setAttribute("src", response._embedded.events[10].images[0].url);
        document.querySelector("#concert6a").firstChild.textContent = response._embedded.events[10].name;

    }

    )
}

// set up some vars
var startScreenContainer = document.querySelector(".startscreen");
var sportsContainer = document.querySelector(".sports");
var sportButton = document.querySelector("#sportButton");
var concertButton = document.querySelector("#concertButton");
var concertContainer = document.querySelector(".concerts");
var input = document.querySelector("#newCity");
var searchListContainer = document.querySelector('.searchList')
var input2 = document.querySelector("#newKeyword");


// event listener for sport button on navbar
if (sportButton) {
    sportButton.addEventListener("click", function (event) {

        event.preventDefault();
        sportsContainer.classList.remove('hidden');
        startScreenContainer.classList.add('hidden');
        concertContainer.classList.add('hidden');
        searchListContainer.classList.add('hidden');
        test3();


    })
};
//  event listener for concert on navbar
if (concertButton) {
    concertButton.addEventListener("click", function (event) {

        event.preventDefault();
        sportsContainer.classList.add('hidden');
        concertContainer.classList.remove('hidden');
        startScreenContainer.classList.add('hidden');
        searchListContainer.classList.add('hidden');
        test4();



    })
};

// event listener for city searchbar
if (searchBtn) {
    searchBtn.addEventListener("click", function (event) {

        event.preventDefault();

        city = input.value;
        console.log(city);
        sportsContainer.classList.add('hidden');
        concertContainer.classList.add('hidden');
        startScreenContainer.classList.add('hidden');
        searchListContainer.classList.remove('hidden');
        test();

    })
};

// event listener for keyword searchbar
if (searchBtn2) {

    searchBtn2.addEventListener("click", function (event) {

        event.preventDefault();
        keyword = input2.value;

        console.log(keyword);
        sportsContainer.classList.add('hidden');
        concertContainer.classList.add('hidden');
        startScreenContainer.classList.add('hidden');
        searchListContainer.classList.remove('hidden');
        test5();

    })
};

// creates list for keyword search results
function test5() {

    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + keyword + "&apikey=db4iTGExqTBzTMvyBMO63edGOsMUS9EU";
    $.ajax({
        url: queryUrl,
        method: "GET",
        crossDomain: true,
    }).then(function (response) {
        console.log(response);
        $('.divider').remove();
        $('.section').remove();

        document.querySelector('#eventHeader').textContent = "Results for  " + keyword;
        for (var j = 0; j < 19; j++) {

            var div = document.createElement('div');
            div.setAttribute('class', "divider");
            var div2 = document.createElement('div');
            var div3 = document.createElement('div');
            div3.setAttribute('class', "col m6")
            var section = document.createElement('section');
            section.setAttribute('class', 'section');
            var h5 = document.createElement("h5");
            h5.textContent = response._embedded.events[j].name;
            var p = document.createElement("p");
            p.textContent = moment(response._embedded.events[j].dates.start.localDate).format("MMM Do YYYY");
            p.setAttribute('id', 'eventDetails');
            var button = document.createElement('button');
            button.setAttribute('class', 'buttonID');
            button.setAttribute('data-dest',response._embedded.events[j]._embedded.venues[0].name);
            button.setAttribute('data-url', response._embedded.events[j].url);
            button.setAttribute('data-image',response._embedded.events[j].images[0].url);
            button.textContent = "Event Details";
            var img = document.createElement("img");
            img.src = (response._embedded.events[j].images[0].url);

            document.querySelector(".list").appendChild(div).parentNode.appendChild(section).appendChild(div3).appendChild(h5).parentNode.appendChild(p).parentNode.appendChild(button).parentNode.parentNode.appendChild(div2).appendChild(img)


        }
    })
}

$(document).on("click", ".buttonID", function (event) {
    console.log("click");
    event.preventDefault();
    location.href = "./event_details.html";
    destination =$(this).attr('data-dest');
    ticketUrl = $(this).attr('data-url');
    image = $(this).attr('data-image');
    localStorage.setItem('im',image);
    localStorage.setItem('ticketUrl',ticketUrl);
    localStorage.setItem('dest',destination);
   

    console.log(ticketUrl);
    console.log(destination);
    // console.log(image);
});
$(document).ready(function () {
    if (buyTickets) {

        $(buyTickets).on("click", function (event) {
            console.log("click");
            event.preventDefault();
           
          ticketUrl = localStorage.getItem("ticketUrl");
            window.location.href = ticketUrl;
            console.log(ticketUrl);

        })
    }
});

$(document).ready(function(){
    if (getDirections ) {
        $(getDirections).on('click', function(event){
            event.preventDefault();
            
            var d = localStorage.getItem('dest')
            $(finalDestination).attr("value", d)
            
            console.log(finalDestination);
        })
    }
})


$(document).ready(function(){
    if (imgJ) {
        event.preventDefault();
        var e = localStorage.getItem('im');
        $(imgJ).attr('src',e);
        console.log(imgJ);
    }

})
