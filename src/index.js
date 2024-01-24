import cloudIcon from "../assets/clouds.svg";
import moonIcon from "../assets/moon.svg";
import precipitationIcon from "../assets/precipitation.svg";
import sunIcon from "../assets/sun.svg";
import windIcon from "../assets/wind.svg";
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
  if (nextSixHoursArray.includes(1) === false) {
    return 0;
  } else {
    let index;
    let result = [];
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

/*
  get the index of the first vlaue that crosses 24 and rests to 1
  if hour is less than or equal to 24 before the hour goes down to 1 {
    push 0 to the array
  } else {
    push 1 to the array
  }
*/

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

getTimeInTwelveHourFormat();

getCurrentWeather("Warsaw").then((result) => {
  createCurrentWeatherDataObject(result);
});
