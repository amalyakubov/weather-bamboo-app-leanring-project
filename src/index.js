import cloudIcon from "../assets/clouds.svg";
import moonIcon from "../assets/moon.svg";
import precipitationIcon from "../assets/precipitation.svg";
import sunIcon from "../assets/sun.svg";
import windIcon from "../assets/wind.svg";

const LOCATIONTEXTFIELD = document.getElementById("location-input");

const KEY = "ffd39e8293c94f3c8fe195415232612";
LOCATIONTEXTFIELD.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
  }
});

function getHours() {
  const CURRENT_DATE = new Date();
  const HOURS = CURRENT_DATE.getHours();
  console.log(HOURS);
  return HOURS;
}

function mapHoursToArray(hours) {
  let array = [];
  for (let i = hours + 1; i <= hours + 7; i++) {
    array.push(i);
  }
  console.log(array);
  return array;
}

function getTimeInTwelveHourFormat() {
  const CURRENT_DATE = new Date();
  const RESULT = CURRENT_DATE.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  console.log(RESULT);
  return RESULT;
}

async function getCurrentWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=4`
  );
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

async function createCurrentWeatherDataObject(weatherData) {
  let nextSixHoursArray = mapHoursToArray(getHours());
  const CURRENT_WEATHER_DATA_OBJECT = {
    currentWeather: {
      temperatureC: weatherData["current"]["temp_c"],
      temperatureF: weatherData["current"]["temp_f"],
      windspeeed: weatherData["current"]["wind_kph"],
      nightTemperature:
        weatherData["forecast"]["forecastday"]["0"]["day"]["mintemp_c"],
      precipitation: weatherData["current"]["precip_mm"],
    },
    nextsixhours: {
      [`${nextSixHoursArray[0]}_tempC`]:
        weatherData["forecast"]["forecastday"]["0"]["hour"][
          nextSixHoursArray[0]
        ]["temp_c"],
      [`${nextSixHoursArray[0]}_tempF`]:
        weatherData["forecast"]["forecastday"]["0"]["hour"][
          nextSixHoursArray[0]
        ]["temp_f"],

      [`${nextSixHoursArray[1]}_tempC`]:
        weatherData["forecast"]["forecastday"]["0"]["hour"][
          nextSixHoursArray[1]
        ]["temp_c"],
      [`${nextSixHoursArray[1]}_tempF`]:
        weatherData["forecast"]["forecastday"]["0"]["hour"][
          nextSixHoursArray[1]
        ]["temp_f"],
      [`${nextSixHoursArray[2]}_tempC`]:
        weatherData["forecast"]["forecastday"]["0"]["hour"][
          nextSixHoursArray[2]
        ]["temp_c"],
      [`${nextSixHoursArray[2]}_tempF`]:
        weatherData["forecast"]["forecastday"]["0"]["hour"][
          nextSixHoursArray[2]
        ]["temp_f"],
      [`${nextSixHoursArray[3]}_tempC`]:
        weatherData["forecast"]["forecastday"]["0"]["hour"][
          nextSixHoursArray[3]
        ]["temp_c"],
      [`${nextSixHoursArray[3]}_tempF`]:
        weatherData["forecast"]["forecastday"]["0"]["hour"][
          nextSixHoursArray[3]
        ]["temp_f"],
      [`${nextSixHoursArray[4]}_tempC`]:
        weatherData["forecast"]["forecastday"]["0"]["hour"][
          nextSixHoursArray[4]
        ]["temp_c"],
      [`${nextSixHoursArray[4]}_tempF`]:
        weatherData["forecast"]["forecastday"]["0"]["hour"][
          nextSixHoursArray[4]
        ]["temp_f"],
      [`${nextSixHoursArray[5]}_tempC`]:
        weatherData["forecast"]["forecastday"]["0"]["hour"][
          nextSixHoursArray[5]
        ]["temp_c"],
      [`${nextSixHoursArray[5]}_tempF`]:
        weatherData["forecast"]["forecastday"]["0"]["hour"][
          nextSixHoursArray[5]
        ]["temp_f"],
      [`${nextSixHoursArray[6]}_tempC`]:
        weatherData["forecast"]["forecastday"]["0"]["hour"][
          nextSixHoursArray[6]
        ]["temp_c"],
      [`${nextSixHoursArray[6]}_tempF`]:
        weatherData["forecast"]["forecastday"]["0"]["hour"][
          nextSixHoursArray[6]
        ]["temp_f"],
    },
    nextThreeDays: {
      1: {
        temp_c: weatherData["forecast"]["forecastday"][1]["day"]["avgtemp_c"],
        temp_f: weatherData["forecast"]["forecastday"][1]["day"]["avgtemp_f"],
        nighttemp_c:
          weatherData["forecast"]["forecastday"][1]["day"]["mintemp_c"],
        nighttemp_f:
          weatherData["forecast"]["forecastday"][1]["day"]["mintemp_f"],
        maximumWindSpeed:
          weatherData["forecast"]["forecastday"][1]["day"]["maxwind_kph"],
        precipitationInMm:
          weatherData["forecast"]["forecastday"][1]["day"]["totalprecip_mm"],
        UVIndex: weatherData["forecast"]["forecastday"][1]["day"]["uv"],
      },
      2: {
        temp_c: weatherData["forecast"]["forecastday"][2]["day"]["avgtemp_c"],
        temp_f: weatherData["forecast"]["forecastday"][2]["day"]["avgtemp_f"],
        nighttemp_c:
          weatherData["forecast"]["forecastday"][2]["day"]["mintemp_c"],
        nighttemp_f:
          weatherData["forecast"]["forecastday"][2]["day"]["mintemp_f"],
        maximumWindSpeed:
          weatherData["forecast"]["forecastday"][2]["day"]["maxwind_kph"],
        precipitationInMm:
          weatherData["forecast"]["forecastday"][2]["day"]["totalprecip_mm"],
        UVIndex: weatherData["forecast"]["forecastday"][2]["day"]["uv"],
      },
      3: {
        temp_c: weatherData["forecast"]["forecastday"][3]["day"]["avgtemp_c"],
        temp_f: weatherData["forecast"]["forecastday"][3]["day"]["avgtemp_f"],
        nighttemp_c:
          weatherData["forecast"]["forecastday"][3]["day"]["mintemp_c"],
        nighttemp_f:
          weatherData["forecast"]["forecastday"][3]["day"]["mintemp_f"],
        maximumWindSpeed:
          weatherData["forecast"]["forecastday"][3]["day"]["maxwind_kph"],
        precipitationInMm:
          weatherData["forecast"]["forecastday"][3]["day"]["totalprecip_mm"],
        UVIndex: weatherData["forecast"]["forecastday"][3]["day"]["uv"],
      },
    },
  };
  console.log(CURRENT_WEATHER_DATA_OBJECT);
  return CURRENT_WEATHER_DATA_OBJECT;
}

getTimeInTwelveHourFormat();

getCurrentWeather("Warsaw").then((result) => {
  createCurrentWeatherDataObject(result);
});
