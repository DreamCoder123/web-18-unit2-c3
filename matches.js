// write js code here corresponding to matches.html


// localStorage.setItem("matchnumber",JSON.stringify(matchobj.matchcount))
var mn=JSON.parse(localStorage.getItem('schedule'));
displayData(mn)
var arr1=[]
console.log(mn);



function displayData(data)
{
    data.forEach(function(elem) {
        var row1 =document.createElement("tr");
        var col1=document.createElement("td");
        col1.innerText=elem.matchcount;

        
        var col2=document.createElement("td");
        col2.innerText=elem.team1;

        var col3=document.createElement("td");
        col3.innerText=elem.team2;

        var col4=document.createElement("td");
        col4.innerText=elem.dates;

        var col5=document.createElement("td");
        col5.innerText=elem.venues;

        var col6=document.createElement("td");
        col6.innerText="Favourites";
        col6.style.color="green";
        col6.addEventListener("click",function(){
            fvr8(elem)
        })
        function filterVenue() {
            var selected = document.getElementById("filterVenue").value;
            console.log(selected);
            var filteredList = mn.filter(function (elem) {
              return elem.venues == selected;
            });
            console.log(filteredList);
            displayData(filteredList);
          }

        row1.append(col1,col2,col3,col4,col5,col6)
        document.querySelector("tbody").append(row1)

        function fvr8(elem)
        {
            arr1.push(elem)
            localStorage.setItem("favourites",JSON.stringify(mn))
            window.location.href="favourites.html"
        }
        // matchnumber.innerText=elem.matchcount.value;
        // teamA.innerText=elem.team1.value;
        // teamB.innerText=elem.team2.value;
        // date.innerText=elem.dates.value;
        // venue.innerText=elem.venues.value;
    });
}