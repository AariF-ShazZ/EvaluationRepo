// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit",matchesFunc);
var matchArr=JSON.parse(localStorage.getItem("schedule")) || [];
function matchesFunc(){
    event.preventDefault();
    console.log("clicked me")
    var matchObj={
        matchNumber:masaiForm.matchNum.value,
        teamFirst:masaiForm.teamA.value,
        teamSecond:masaiForm.teamB.value,
        matchDate:masaiForm.date.value,
        matchVanue:masaiForm.venue.value
    }
    matchArr.push(matchObj);
    localStorage.setItem("schedule",JSON.stringify(matchArr))
}