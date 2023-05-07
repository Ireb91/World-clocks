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

updateTime();
setInterval(updateTime, 1000);
