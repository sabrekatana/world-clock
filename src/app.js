function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#city-cards");

  cityElement.innerHTML = `<div class="city-card">
<div>
  <h2 class="city">${cityName}</h2>
  <p class="date">${cityTime.format("MMMM Do YYYY")}</p>
</div>
<div>
  <h3 class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></h3>
</div>
</div>`;
}

let selectionElement = document.querySelector("#cities");
selectionElement.addEventListener("change", updateCity);
