function updateTime() {
  let TokyoCityElement = document.querySelector("#tokyo");
  let TokyoDateElement = TokyoCityElement.querySelector(".date");
  let TokyoTimeElement = TokyoCityElement.querySelector(".time");
  let TokyoCurrentTime = moment().tz("Asia/Tokyo");
  TokyoDateElement.innerHTML = TokyoCurrentTime.format("dddd MMMM Do YYYY");
  TokyoTimeElement.innerHTML = TokyoCurrentTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );

  let LondonCityElement = document.querySelector("#london");
  let LondonDateElement = LondonCityElement.querySelector(".date");
  let LondonTimeElement = LondonCityElement.querySelector(".time");
  let LondonCurrentTime = moment().tz("Europe/London");
  LondonDateElement.innerHTML = LondonCurrentTime.format("dddd MMMM Do YYYY");
  LondonTimeElement.innerHTML = LondonCurrentTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("dddd MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss ")}<small>${cityTime.format(
    "A"
  )}</small></div>
  </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
