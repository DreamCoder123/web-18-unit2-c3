// write js code here corresponding to favourites.html

var fvr8 =JSON.parse(localStorage.getItem("schedule"))||[]
displayData(fvr8);
function displayData(fvr8)
{
    fvr8.forEach(function(elem,index) {
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
        col6.innerText="Delete";
        col6.style.color="red";
        col6.style.cursor="pointer";
        col6.addEventListener("click",function(){
           event.target.parentNode.remove()
           deleteItem(elem)
        })
        row1.append(col1,col2,col3,col4,col5,col6)
        document.querySelector("tbody").append(row1)



      
    })
}

