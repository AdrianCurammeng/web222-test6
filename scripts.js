document.addEventListener("DOMContentLoaded", () =>
{
    document.querySelector("#yearConfirm").addEventListener('click', () =>
    {
        getRace();
    });
});


function addTableCell(content, parent)
{
    var cell = document.createElement("td");
    cell.textContent = content;
    parent.appendChild(cell);
}


function getRace()
{
    var year = document.querySelector("#yearEntry").value
    var url = `https://ergast.com/api/f1/${year}.json`
    fetch(url)
    .then((process) => process.json())
    .then(data =>
    {
        console.log(data);
        showRaces(data);
    });
}


function showRaces(races)
{
    var raceBody = document.querySelector("#raceTableBody");
    raceBody.innerHTML = "";
    for (let i = 0; i < parseInt(races.MRData.total); i++)
    {
        var raceRow = document.createElement("tr");
        var race = races.MRData.RaceTable.Races[i];
        addTableCell(race.season, raceRow);
        addTableCell(race.round, raceRow);
        addTableCell(race.raceName, raceRow);
        addTableCell(race.date, raceRow);
        addTableCell(race.time, raceRow);
        addTableCell(race.Circuit.Location.country, raceRow);
        addTableCell(race.url, raceRow);
        raceBody.appendChild(raceRow);
    }
}