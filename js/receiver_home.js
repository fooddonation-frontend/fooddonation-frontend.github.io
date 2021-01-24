function showInfo(x) {
    // hide other cities' tables
    const cities = document.getElementsByClassName("cities")
    for (let i = 0; i < cities.length; i++) {
        cities[i].style.display = "none";
    }
    const selected_city = document.getElementById(x);
    if (selected_city === null) {
        // if the selected city does not have a donor
        const no_donors_find = document.getElementById("no_donors_find");
        no_donors_find.style.display = "block";
    } else {
        // show the selected city's table
        selected_city.style.display = "table";
    }
}