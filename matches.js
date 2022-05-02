// write js code here corresponding to matches.html

var matchArr=JSON.parse(localStorage.getItem("schedule"));
var  favouriteArr=JSON.parse(localStorage.getItem("favourites")) || [];
displayData(matchArr);


function filterVenueFunc(){
    var seleted=document.getElementById("filterVenue").value;
    var filterList=matchArr.filter(function(ele){
        return ele.matchVanue==seleted;
    })
    displayData(filterList);
}

function displayData(data){
 document.querySelector("tbody").innerHTML="";
   data.forEach(function(ele){
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=ele.matchNumber; 
        var td2=document.createElement("td");
        td2.innerText=ele.teamFirst;
        var td3=document.createElement("td");
        td3.innerText=ele.teamSecond;
        var td4=document.createElement("td");
        td4.innerText=ele.matchDate;
        var td5=document.createElement("td");
        td5.innerText=ele.matchVanue;
        var td6=document.createElement("td");
        td6.innerText= "Add as Favourites";
        td6.style.cursor="pointer";
        td6.style.color="green";

        td6.addEventListener("click",function(){
            matchFav(ele);
        })
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
   })
}

function matchFav(ele){
    favouriteArr.push(ele);
    localStorage.setItem("favourites",JSON.stringify(favouriteArr))
}