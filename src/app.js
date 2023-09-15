function updateTime() {
  let losangeles = document.querySelector("#losangeles");
  let losangelesDate = losangeles.querySelector(".date");
  let losangelesTimeElement = losangeles.querySelector(".time");
  let losangelesTime = moment().tz("America / Los_Angeles");

  losangelesDate.innerHTML = moment().format("MMMM Do YYYY");
  losangelesTimeElement.innerHTML = `${losangelesTime.format(
    "h:mm:ss"
  )} <small>${losangelesTime.format("A")}</small>`;

  let paris = document.querySelector("#paris");
  let parisDate = paris.querySelector(".date");
  let parisTimeElement = paris.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDate.innerHTML = moment().format("MMMM Do YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(
    "h:mm:ss"
  )} <small>${parisTime.format("A")}</small>`;
}
updateTime();
setInterval(updateTime, 1000);
