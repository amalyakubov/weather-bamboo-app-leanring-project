import cloudIcon from "../assets/clouds.svg";
import moonIcon from "../assets/moon.svg";
import precipitationIcon from "../assets/precipitation.svg";
import sunIcon from "../assets/sun.svg";
import windIcon from "../assets/wind.svg";
import githubLogo from "../assets/github-mark-white.svg";
import gradient from "../assets/mesh-gradient.png";
import "./style.css";

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
    if (i < 24) {
      array.push(i);
    } else if (i >= 24) {
      array.push(i - 24);
    }
    // array.push(i);
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
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=3 `
    );
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.log(error);
  }
}

function createDayArray(nextSixHoursArray) {
  let result = [];
  if (nextSixHoursArray.includes(1) === false) {
    result = [0, 0, 0, 0, 0, 0, 0];
    return result;
  } else {
    let index;
    for (let i = 0; i <= nextSixHoursArray.length; i++) {
      if (nextSixHoursArray[i] === 23 && nextSixHoursArray[i + 1] === 0) {
        index = i;
      }
    }
    for (let k = 0; k <= 6; k++) {
      if (k <= index) {
        result.push(0);
      } else {
        result.push(1);
      }
    }
    console.log(`result ${result}`);
    return result;
  }
}

function refreshPage(weatherData) {
  let nextSixHoursArray24format = mapHoursToArray(getHours());
  let nextSixHoursArray = nextSixHoursArray24format.map((element) => {
    if (element === 0) {
      return `0:00`;
    } else {
      return `${element}:00`;
    }
  });
  const FIRST_HOUR = document.getElementById("1st-hour");
  const SECOND_HOUR = document.getElementById("2nd-hour");
  const THIRD_HOUR = document.getElementById("3rd-hour");
  const FOURTH_HOUR = document.getElementById("4th-hour");
  const FIFTH_HOUR = document.getElementById("5th-hour");

  FIRST_HOUR.textContent = nextSixHoursArray[0];
  SECOND_HOUR.textContent = nextSixHoursArray[1];
  THIRD_HOUR.textContent = nextSixHoursArray[2];
  FOURTH_HOUR.textContent = nextSixHoursArray[3];
  FIFTH_HOUR.textContent = nextSixHoursArray[4];
}

async function createCurrentWeatherDataObject(weatherData) {
  let nextSixHoursArray = mapHoursToArray(getHours());
  let day = createDayArray(nextSixHoursArray);

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
        weatherData["forecast"]["forecastday"][day[0]]["hour"][
          nextSixHoursArray[0]
        ]["temp_c"],
      [`${nextSixHoursArray[0]}_tempF`]:
        weatherData["forecast"]["forecastday"][day[0]]["hour"][
          nextSixHoursArray[0]
        ]["temp_f"],

      [`${nextSixHoursArray[1]}_tempC`]:
        weatherData["forecast"]["forecastday"][day[1]]["hour"][
          nextSixHoursArray[1]
        ]["temp_c"],
      [`${nextSixHoursArray[1]}_tempF`]:
        weatherData["forecast"]["forecastday"][day[1]]["hour"][
          nextSixHoursArray[1]
        ]["temp_f"],
      [`${nextSixHoursArray[2]}_tempC`]:
        weatherData["forecast"]["forecastday"][day[2]]["hour"][
          nextSixHoursArray[2]
        ]["temp_c"],
      [`${nextSixHoursArray[2]}_tempF`]:
        weatherData["forecast"]["forecastday"][day[2]]["hour"][
          nextSixHoursArray[2]
        ]["temp_f"],
      [`${nextSixHoursArray[3]}_tempC`]:
        weatherData["forecast"]["forecastday"][day[3]]["hour"][
          nextSixHoursArray[3]
        ]["temp_c"],
      [`${nextSixHoursArray[3]}_tempF`]:
        weatherData["forecast"]["forecastday"][day[3]]["hour"][
          nextSixHoursArray[3]
        ]["temp_f"],
      [`${nextSixHoursArray[4]}_tempC`]:
        weatherData["forecast"]["forecastday"][day[4]]["hour"][
          nextSixHoursArray[4]
        ]["temp_c"],
      [`${nextSixHoursArray[4]}_tempF`]:
        weatherData["forecast"]["forecastday"][day[4]]["hour"][
          nextSixHoursArray[4]
        ]["temp_f"],
      [`${nextSixHoursArray[5]}_tempC`]:
        weatherData["forecast"]["forecastday"][day[5]]["hour"][
          nextSixHoursArray[5]
        ]["temp_c"],
      [`${nextSixHoursArray[5]}_tempF`]:
        weatherData["forecast"]["forecastday"][day[5]]["hour"][
          nextSixHoursArray[5]
        ]["temp_f"],
      [`${nextSixHoursArray[6]}_tempC`]:
        weatherData["forecast"]["forecastday"][day[6]]["hour"][
          nextSixHoursArray[6]
        ]["temp_c"],
      [`${nextSixHoursArray[6]}_tempF`]:
        weatherData["forecast"]["forecastday"][day[6]]["hour"][
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
    },
  };
  console.log(CURRENT_WEATHER_DATA_OBJECT);
  return CURRENT_WEATHER_DATA_OBJECT;
}

const BUTTON = document.getElementById("switch-degree-measurement-button");
BUTTON.addEventListener("click", (event) => {
  if (BUTTON.classList.contains("fahrenheit")) {
    BUTTON.textContent = `Switch to (C\u00B0)`;
    BUTTON.classList.remove("fahrenheit");
  } else {
    BUTTON.textContent = `Switch to (F\u00B0)`;
    BUTTON.classList.add("fahrenheit");
  }
});

getTimeInTwelveHourFormat();

getCurrentWeather("Warsaw").then((result) => {
  createCurrentWeatherDataObject(result);
});

refreshPage();
