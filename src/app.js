function currentTime() {
  let current = moment.tz.guess();
  let cityName = current.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(current);
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

function updateCity(event) {
  clearInterval(refresh);
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    refresh = setInterval(currentTime, 1000);
    cityTimeZone = moment.tz.guess();
  }
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

currentTime();
var refresh = setInterval(currentTime, 1000);

let selectionElement = document.querySelector("#cities");
selectionElement.addEventListener("change", updateCity);
