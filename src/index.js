import cloudIcon from "../assets/clouds.svg";
import moonIcon from "../assets/moon.svg";
import precipitationIcon from "../assets/precipitation.svg";
import sunIcon from "../assets/sun.svg";
import windIcon from "../assets/wind.svg";
import githubLogo from "../assets/github-mark-white.svg";
import gradient from "../assets/mesh-gradient.png";
import { add } from "date-fns";
import "./style.css";

localStorage.clear();

function getHours() {
  const LOCAL_TIME = new Date(Date.parse(locationCurrentTime));
  const HOURS = LOCAL_TIME.getHours();

  return HOURS;
}

let locationCurrentTime;
let tempUnits = "celsius";

function mapHoursToArray(hours) {
  let array = [];
  let lastPushedTime;
  for (let i = hours + 1; i <= hours + 7; i++) {
    if (lastPushedTime === undefined) {
      let nextHour = add(locationCurrentTime, {
        hours: 1,
      });
      array.push(nextHour);
      lastPushedTime = nextHour;
    } else {
      let nextHour = add(lastPushedTime, {
        hours: 1,
      });
      array.push(nextHour);
      lastPushedTime = nextHour;
    }
    // if (i < 24) {
    //   array.push(i);
    // } else if (i >= 24) {
    //   array.push(i - 24);
    // }
  }
  return array;
}

function getTimeInTwelveHourFormat() {
  const CURRENT_DATE = new Date();
  const RESULT = CURRENT_DATE.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
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

const LOCATIONTEXTFIELD = document.getElementById("location-input");
const KEY = "ffd39e8293c94f3c8fe195415232612";
LOCATIONTEXTFIELD.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getCurrentWeather(LOCATIONTEXTFIELD.value).then((result) => {
      (async () => {
        locationCurrentTime = result["location"]["localtime"];
        let weatherData = await createCurrentWeatherDataObject(result);
        refreshPage(await weatherData, result);
        localStorage.setItem("weatherData", JSON.stringify(weatherData));
      })();
    });
  }
});

function createDayArray(nextSixHoursArray) {
  let result = [];

  if (nextSixHoursArray[6].getDate() === nextSixHoursArray[0].getDate()) {
    result = [0, 0, 0, 0, 0, 0, 0];
    return result;
  } else {
    let index;
    for (let i = 0; i <= nextSixHoursArray.length; i++) {
      if (
        nextSixHoursArray[i].getHours() === 23 &&
        nextSixHoursArray[i + 1].getHours() === 0
      ) {
        index = i;
        break;
      }
    }
    for (let k = 0; k <= 6; k++) {
      if (k <= index) {
        result.push(0);
      } else {
        result.push(1);
      }
    }
    return result;
  }
}

function getNextSixHoursInDisplayForm() {
  let nextSixHoursArray24format = mapHoursToArray(getHours());

  let nextSixHoursArray = nextSixHoursArray24format.map((element) => {
    if (element.getHours() === 0) {
      return `0:00`;
    } else {
      return `${element.getHours()}:00`;
    }
  });
  return nextSixHoursArray;
}

function addSufixToDayNumber(dayOfTheMonth) {
  let lastNumber = dayOfTheMonth % 10;

  switch (lastNumber) {
    case 1:
      return `${dayOfTheMonth}st`;
    case 2:
      return `${dayOfTheMonth}nd`;
    case 3:
      return `${dayOfTheMonth}rd`;
    case 4:
      return `${dayOfTheMonth}th`;
    case 5:
      return `${dayOfTheMonth}th`;
    case 6:
      return `${dayOfTheMonth}th`;
    case 7:
      return `${dayOfTheMonth}th`;
    case 8:
      return `${dayOfTheMonth}th`;
    case 9:
      return `${dayOfTheMonth}th`;
    case 0:
      return `${dayOfTheMonth}th`;
  }
}

function getNextThreeDays() {
  let today = new Date(locationCurrentTime);
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  let oneDayAfterTomorrow = new Date();
  oneDayAfterTomorrow.setDate(today.getDate() + 2);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let [
    todayAsAWrittenDay,
    tomorrrowAsWrittenDay,
    oneDayAfterTomorrowAsWrittenDay,
  ] = [
    addSufixToDayNumber(today.getDate()),
    addSufixToDayNumber(tomorrow.getDate()),
    addSufixToDayNumber(oneDayAfterTomorrow.getDate()),
  ];

  let daysObject = {
    0: [days[today.getDay()], todayAsAWrittenDay],
    1: [days[tomorrow.getDay()], tomorrrowAsWrittenDay],
    2: [days[oneDayAfterTomorrow.getDay()], oneDayAfterTomorrowAsWrittenDay],
  };

  return daysObject;
}

async function createCurrentWeatherDataObject(weatherData) {
  let nextSixHoursArray = mapHoursToArray(getHours());
  let day = createDayArray(nextSixHoursArray);

  const CURRENT_WEATHER_DATA_OBJECT = {
    currentWeather: {
      temperatureC: weatherData["current"]["temp_c"],
      temperatureF: weatherData["current"]["temp_f"],
      windspeedKMH: weatherData["current"]["wind_kph"],
      windspeedMPH: weatherData["current"]["wind_mph"],
      nightTemperatureC:
        weatherData["forecast"]["forecastday"]["0"]["day"]["mintemp_c"],
      nightTemperatureF:
        weatherData["forecast"]["forecastday"]["0"]["day"]["mintemp_f"],
      precipitation: weatherData["current"]["precip_mm"],
      UV: weatherData["current"]["uv"],
    },
    nextsixhours: {
      [`${nextSixHoursArray[0].getHours()}_tempC`]:
        weatherData["forecast"]["forecastday"][day[0]]["hour"][
          nextSixHoursArray[0].getHours()
        ]["temp_c"],
      [`${nextSixHoursArray[0].getHours()}_tempF`]:
        weatherData["forecast"]["forecastday"][day[0]]["hour"][
          nextSixHoursArray[0].getHours()
        ]["temp_f"],

      [`${nextSixHoursArray[1].getHours()}_tempC`]:
        weatherData["forecast"]["forecastday"][day[1]]["hour"][
          nextSixHoursArray[1].getHours()
        ]["temp_c"],
      [`${nextSixHoursArray[1].getHours()}_tempF`]:
        weatherData["forecast"]["forecastday"][day[1]]["hour"][
          nextSixHoursArray[1].getHours()
        ]["temp_f"],
      [`${nextSixHoursArray[2].getHours()}_tempC`]:
        weatherData["forecast"]["forecastday"][day[2]]["hour"][
          nextSixHoursArray[2].getHours()
        ]["temp_c"],
      [`${nextSixHoursArray[2].getHours()}_tempF`]:
        weatherData["forecast"]["forecastday"][day[2]]["hour"][
          nextSixHoursArray[2].getHours()
        ]["temp_f"],
      [`${nextSixHoursArray[3].getHours()}_tempC`]:
        weatherData["forecast"]["forecastday"][day[3]]["hour"][
          nextSixHoursArray[3].getHours()
        ]["temp_c"],
      [`${nextSixHoursArray[3].getHours()}_tempF`]:
        weatherData["forecast"]["forecastday"][day[3]]["hour"][
          nextSixHoursArray[3].getHours()
        ]["temp_f"],
      [`${nextSixHoursArray[4].getHours()}_tempC`]:
        weatherData["forecast"]["forecastday"][day[4]]["hour"][
          nextSixHoursArray[4].getHours()
        ]["temp_c"],
      [`${nextSixHoursArray[4].getHours()}_tempF`]:
        weatherData["forecast"]["forecastday"][day[4]]["hour"][
          nextSixHoursArray[4].getHours()
        ]["temp_f"],
      [`${nextSixHoursArray[5].getHours()}_tempC`]:
        weatherData["forecast"]["forecastday"][day[5]]["hour"][
          nextSixHoursArray[5].getHours()
        ]["temp_c"],
      [`${nextSixHoursArray[5].getHours()}_tempF`]:
        weatherData["forecast"]["forecastday"][day[5]]["hour"][
          nextSixHoursArray[5].getHours()
        ]["temp_f"],
      [`${nextSixHoursArray[6].getHours()}_tempC`]:
        weatherData["forecast"]["forecastday"][day[6]]["hour"][
          nextSixHoursArray[6].getHours()
        ]["temp_c"],
      [`${nextSixHoursArray[6].getHours()}_tempF`]:
        weatherData["forecast"]["forecastday"][day[6]]["hour"][
          nextSixHoursArray[6].getHours()
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
        maximumWindSpeedKPH:
          weatherData["forecast"]["forecastday"][1]["day"]["maxwind_kph"],
        maximumWindSpeedMPH:
          weatherData["forecast"]["forecastday"][1]["day"]["maxwind_mph"],
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
        maximumWindSpeedKMH:
          weatherData["forecast"]["forecastday"][2]["day"]["maxwind_kph"],
        maximumWindSpeedMPH:
          weatherData["forecast"]["forecastday"][2]["day"]["maxwind_mph"],
        precipitationInMm:
          weatherData["forecast"]["forecastday"][2]["day"]["totalprecip_mm"],
        UVIndex: weatherData["forecast"]["forecastday"][2]["day"]["uv"],
      },
    },
  };
  return CURRENT_WEATHER_DATA_OBJECT;
}

function getTodayTempObject(weatherData) {
  let nextSixHours = mapHoursToArray(getHours());

  let resultObject = {
    celsius: [
      weatherData["nextsixhours"][`${nextSixHours[0].getHours()}_tempC`],
      weatherData["nextsixhours"][`${nextSixHours[1].getHours()}_tempC`],
      weatherData["nextsixhours"][`${nextSixHours[2].getHours()}_tempC`],
      weatherData["nextsixhours"][`${nextSixHours[3].getHours()}_tempC`],
      weatherData["nextsixhours"][`${nextSixHours[4].getHours()}_tempC`],
      weatherData["nextsixhours"][`${nextSixHours[5].getHours()}_tempC`],
    ],
    fahrenheit: [
      weatherData["nextsixhours"][`${nextSixHours[0].getHours()}_tempF`],
      weatherData["nextsixhours"][`${nextSixHours[1].getHours()}_tempF`],
      weatherData["nextsixhours"][`${nextSixHours[2].getHours()}_tempF`],
      weatherData["nextsixhours"][`${nextSixHours[3].getHours()}_tempF`],
      weatherData["nextsixhours"][`${nextSixHours[4].getHours()}_tempF`],
      weatherData["nextsixhours"][`${nextSixHours[5].getHours()}_tempF`],
    ],
  };
  return resultObject;
}

function refreshWeatherCards(weatherData) {
  const [
    FIRST_DAY_TEMP,
    FIRST_DAY_NIGHT_TEMP,
    FIRST_DAY_WIND,
    FIRST_DAY_PRECIPITATION,
    FIRST_DAY_UV,
    SECOND_DAY_TEMP,
    SECOND_DAY_NIGHT_TEMP,
    SECOND_DAY_WIND,
    SECOND_DAY_PRECIPITATION,
    SECOND_DAY_UV,
    THIRD_DAY_TEMP,
    THIRD_DAY_NIGHT_TEMP,
    THIRD_DAY_WIND,
    THIRD_DAY_PRECIPITATION,
    THIDR_DAY_UV,
  ] = [
    document.getElementById("1st-day-temp"),
    document.getElementById("1st-day-night-temp"),
    document.getElementById("1st-day-wind"),
    document.getElementById("1st-day-precipitation"),
    document.getElementById("1st-day-uv"),
    document.getElementById("2nd-day-temp"),
    document.getElementById("2nd-day-night-temp"),
    document.getElementById("2nd-day-wind"),
    document.getElementById("2nd-day-precipitation"),
    document.getElementById("2nd-day-uv"),
    document.getElementById("3rd-day-temp"),
    document.getElementById("3rd-day-night-temp"),
    document.getElementById("3rd-day-wind"),
    document.getElementById("3rd-day-precipitation"),
    document.getElementById("3rd-day-uv"),
  ];

  if (tempUnits === "celsius") {
    [
      FIRST_DAY_TEMP.textContent,
      FIRST_DAY_NIGHT_TEMP.textContent,
      FIRST_DAY_WIND.textContent,
      FIRST_DAY_PRECIPITATION.textContent,
      FIRST_DAY_UV.textContent,
      SECOND_DAY_TEMP.textContent,
      SECOND_DAY_NIGHT_TEMP.textContent,
      SECOND_DAY_WIND.textContent,
      SECOND_DAY_PRECIPITATION.textContent,
      SECOND_DAY_UV.textContent,
      THIRD_DAY_TEMP.textContent,
      THIRD_DAY_NIGHT_TEMP.textContent,
      THIRD_DAY_WIND.textContent,
      THIRD_DAY_PRECIPITATION.textContent,
      THIDR_DAY_UV.textContent,
    ] = [
      `${weatherData["currentWeather"]["temperatureC"]}\xB0C`,
      `${weatherData["currentWeather"]["nightTemperatureC"]}\xB0C`,
      `${weatherData["currentWeather"]["windspeedKMH"]} km/h`,
      `${weatherData["currentWeather"]["precipitation"]} mm`,
      weatherData["currentWeather"]["UV"],
      `${weatherData["nextThreeDays"][1]["temp_c"]}\xB0C`,
      `${weatherData["nextThreeDays"][1]["nighttemp_c"]}\xB0C`,
      `${weatherData["nextThreeDays"][1]["maximumWindSpeedKPH"]} km/h`,
      `${weatherData["nextThreeDays"][1]["precipitationInMm"]} mm`,
      weatherData["nextThreeDays"][1]["UVIndex"],
      `${weatherData["nextThreeDays"][2]["temp_c"]}\xB0C`,
      `${weatherData["nextThreeDays"][2]["nighttemp_c"]}\xB0C`,
      `${weatherData["nextThreeDays"][2]["maximumWindSpeedKMH"]} km/h`,
      `${weatherData["nextThreeDays"][2]["precipitationInMm"]} mm`,
      weatherData["nextThreeDays"][2]["UVIndex"],
    ];
  } else {
    [
      FIRST_DAY_TEMP.textContent,
      FIRST_DAY_NIGHT_TEMP.textContent,
      FIRST_DAY_WIND.textContent,
      FIRST_DAY_PRECIPITATION.textContent,
      FIRST_DAY_UV.textContent,
      SECOND_DAY_TEMP.textContent,
      SECOND_DAY_NIGHT_TEMP.textContent,
      SECOND_DAY_WIND.textContent,
      SECOND_DAY_PRECIPITATION.textContent,
      SECOND_DAY_UV.textContent,
      THIRD_DAY_TEMP.textContent,
      THIRD_DAY_NIGHT_TEMP.textContent,
      THIRD_DAY_WIND.textContent,
      THIRD_DAY_PRECIPITATION.textContent,
      THIDR_DAY_UV.textContent,
    ] = [
      `${weatherData["currentWeather"]["temperatureF"]}\xB0F`,
      `${weatherData["currentWeather"]["nightTemperatureF"]}\xB0F`,
      `${weatherData["currentWeather"]["windspeedMPH"]} mph`,
      `${weatherData["currentWeather"]["precipitation"]} mm`,
      weatherData["currentWeather"]["UV"],
      `${weatherData["nextThreeDays"][1]["temp_f"]}\xB0F`,
      `${weatherData["nextThreeDays"][1]["nighttemp_f"]}\xB0F`,
      `${weatherData["nextThreeDays"][1]["maximumWindSpeedMPH"]} mph`,
      `${weatherData["nextThreeDays"][1]["precipitationInMm"]} mm`,
      weatherData["nextThreeDays"][1]["UVIndex"],
      `${weatherData["nextThreeDays"][2]["temp_f"]}\xB0F`,
      `${weatherData["nextThreeDays"][2]["nighttemp_f"]}\xB0f`,
      `${weatherData["nextThreeDays"][2]["maximumWindSpeedMPH"]} mph`,
      `${weatherData["nextThreeDays"][2]["precipitationInMm"]} mm`,
      weatherData["nextThreeDays"][2]["UVIndex"],
    ];
  }
}

function loadForecastIcons(result) {
  const [
    FIRST_DAY_HEADING_FORECAST_ICON,
    FIRST_DAY_CARD_FORECAST_ICON,
    SECOND_DAY_FORECAST_ICON,
    THIRD_DAY_FORECAST_ICON,
  ] = [
    document.getElementById("current-weather-icon"),
    document.getElementById("current-weather-card-icon"),
    document.getElementById("second-day-forecast-icon"),
    document.getElementById("third-day-forecast-icon"),
  ];

  [
    FIRST_DAY_HEADING_FORECAST_ICON.src,
    FIRST_DAY_CARD_FORECAST_ICON.src,
    SECOND_DAY_FORECAST_ICON.src,
    THIRD_DAY_FORECAST_ICON.src,
  ] = [
    `${result["current"]["condition"]["icon"]}`,
    `${result["current"]["condition"]["icon"]}`,
    `${result["forecast"]["forecastday"]["1"]["day"]["condition"]["icon"]}`,
    `${result["forecast"]["forecastday"]["2"]["day"]["condition"]["icon"]}`,
    ,
  ];
  console.log(`${result["current"]["condition"]["icon"]}`);
}

function refreshPage(weatherData, result) {
  const nextSixHoursArray = getNextSixHoursInDisplayForm();
  let tempeartureObject = getTodayTempObject(weatherData);
  let arrayObjectOfNextThreeDaysObj = getNextThreeDays();

  let tempUnitsymbol = tempUnits === "celsius" ? "C" : "F";

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

  const FIRST_HOUR_TEMP = document.getElementById("1st-hour-temp");
  const SECOND_HOUR_TEMP = document.getElementById("2nd-hour-temp");
  const THIRD_HOUR_TEMP = document.getElementById("3rd-hour-temp");
  const FOURTH_HOUR_TEMP = document.getElementById("4th-hour-temp");
  const FIFTH_HOUR_TEMP = document.getElementById("5th-hour-temp");

  [
    FIRST_HOUR_TEMP.textContent,
    SECOND_HOUR_TEMP.textContent,
    THIRD_HOUR_TEMP.textContent,
    FOURTH_HOUR_TEMP.textContent,
    FIFTH_HOUR_TEMP.textContent,
  ] = [
    `${tempeartureObject[tempUnits][0]}\xB0${tempUnitsymbol}`,
    `${tempeartureObject[tempUnits][1]}\xB0${tempUnitsymbol}`,
    `${tempeartureObject[tempUnits][2]}\xB0${tempUnitsymbol}`,
    `${tempeartureObject[tempUnits][3]}\xB0${tempUnitsymbol}`,
    `${tempeartureObject[tempUnits][4]}\xB0${tempUnitsymbol}`,
  ];

  const [
    DAY_TEMP,
    NIGHT_TEMP,
    PERCEPITATION_TODAY,
    WIND_TODAY,
    UVINDEX_TODAY,
    USER_LOCATION,
    LOCAL_TIME,
    HEADER_TEMP,
  ] = [
    document.getElementById("today-day-temp"),
    document.getElementById("today-night-temp"),
    document.getElementById("today-precipitation"),
    document.getElementById("today-wind"),
    document.getElementById("today-uv"),
    document.getElementById("local-location"),
    document.getElementById("local-time"),
    document.getElementById("header-temp"),
  ];

  let minutes;
  let hours = new Date(Date.parse(locationCurrentTime)).getHours();
  if (new Date(Date.parse(locationCurrentTime)).getMinutes() < 10) {
    minutes = `0${new Date(Date.parse(locationCurrentTime)).getMinutes()}`;
  } else {
    minutes = `${new Date(Date.parse(locationCurrentTime)).getMinutes()}`;
  }
  let localTime = `${hours}:${minutes}`;

  if (tempUnits === "celsius") {
    [DAY_TEMP.textContent, NIGHT_TEMP.textContent, HEADER_TEMP.textContent] = [
      `${weatherData["currentWeather"]["temperatureC"]}\xB0C`,
      `${weatherData["currentWeather"]["nightTemperatureC"]}\xB0C`,
      `${weatherData["currentWeather"]["nightTemperatureC"]}\xB0C`,
    ];
  } else {
    [DAY_TEMP.textContent, NIGHT_TEMP.textContent, HEADER_TEMP.textContent] = [
      `${weatherData["currentWeather"]["temperatureF"]}\xB0F`,
      `${weatherData["currentWeather"]["nightTemperatureF"]}\xB0F`,
      `${weatherData["currentWeather"]["temperatureF"]}\xB0F`,
    ];
  }

  [USER_LOCATION.textContent, LOCAL_TIME.textContent] = [
    `${result["location"]["name"]}, ${result["location"]["country"]}`,
    `${localTime}`,
  ];

  [
    PERCEPITATION_TODAY.textContent,
    WIND_TODAY.textContent,
    UVINDEX_TODAY.textContent,
  ] = [
    `${weatherData["currentWeather"]["precipitation"]}mm`,
    `${weatherData["currentWeather"]["windspeedKMH"]}km/h`,
    weatherData["currentWeather"]["UV"],
  ];

  const [FIRSTDAY_HEADING, SECOND_DAY_HEADING, THIRD_DAY_HEADING] = [
    document.getElementById("1st-day"),
    document.getElementById("2nd-day"),
    document.getElementById("3rd-day"),
  ];

  [
    FIRSTDAY_HEADING.textContent,
    SECOND_DAY_HEADING.textContent,
    THIRD_DAY_HEADING.textContent,
  ] = [
    `${arrayObjectOfNextThreeDaysObj[0][0]}, ${arrayObjectOfNextThreeDaysObj[0][1]}`,
    `${arrayObjectOfNextThreeDaysObj[1][0]}, ${arrayObjectOfNextThreeDaysObj[1][1]}`,
    `${arrayObjectOfNextThreeDaysObj[2][0]}, ${arrayObjectOfNextThreeDaysObj[2][1]}`,
  ];

  refreshWeatherCards(weatherData);
  loadForecastIcons(result);
}

const BUTTON = document.getElementById("switch-degree-measurement-button");
BUTTON.addEventListener("click", (event) => {
  if (BUTTON.classList.contains("fahrenheit")) {
    BUTTON.textContent = `Switch to (C\u00B0)`;
    BUTTON.classList.remove("fahrenheit");
    tempUnits = "celsius";
  } else {
    BUTTON.textContent = `Switch to (F\u00B0)`;
    BUTTON.classList.add("fahrenheit");
    tempUnits = "fahrenheit";
  }
  refreshTemperature();
});

function refreshTemperature() {
  const WEATHER_DATA = JSON.parse(localStorage.getItem("weatherData"));
  console.log("weatherData:");
  console.log(WEATHER_DATA);
  let tempeartureObject = getTodayTempObject(WEATHER_DATA);
  console.log("temperature😭:object");
  console.log(tempeartureObject);

  const [
    HEADER_TEMP,
    TODAY_DAY_TEMP,
    TODAY_NIGHT_TEMP,
    TODAY_WIND,
    FIRST_HOUR_TEMP,
    SECOND_HOUR_TEMP,
    THIRD_HOUR_TEMP,
    FOURTH_HOUR_TEMP,
    FIFTH_HOUR_TEMP,
    FIRST_DAY_TEMP,
    FIRST_DAY_NIGHT_TEMP,
    FIRST_DAY_WIND,
    SECOND_DAY_TEMP,
    SECOND_DAY_NIGHT_TEMP,
    SECOND_DAY_WIND,
    THIRD_DAY_TEMP,
    THIRD_DAY_NIGHT_TEMP,
    THIRD_DAY_WIND,
  ] = [
    document.getElementById("header-temp"),
    document.getElementById("today-day-temp"),
    document.getElementById("today-night-temp"),
    document.getElementById("today-wind"),
    document.getElementById("1st-hour-temp"),
    document.getElementById("2nd-hour-temp"),
    document.getElementById("3rd-hour-temp"),
    document.getElementById("4th-hour-temp"),
    document.getElementById("5th-hour-temp"),
    document.getElementById("1st-day-temp"),
    document.getElementById("1st-day-night-temp"),
    document.getElementById("1st-day-wind"),
    document.getElementById("2nd-day-temp"),
    document.getElementById("2nd-day-night-temp"),
    document.getElementById("2nd-day-wind"),
    document.getElementById("3rd-day-temp"),
    document.getElementById("3rd-day-night-temp"),
    document.getElementById("3rd-day-wind"),
  ];

  if (tempUnits === "celsius") {
    [
      HEADER_TEMP.textContent,
      TODAY_DAY_TEMP.textContent,
      TODAY_NIGHT_TEMP.textContent,
      TODAY_WIND.textContent,
      FIRST_HOUR_TEMP.textContent,
      SECOND_HOUR_TEMP.textContent,
      THIRD_HOUR_TEMP.textContent,
      FOURTH_HOUR_TEMP.textContent,
      FIFTH_HOUR_TEMP.textContent,
      FIRST_DAY_TEMP.textContent,
      FIRST_DAY_NIGHT_TEMP.textContent,
      FIRST_DAY_WIND.textContent,
      SECOND_DAY_TEMP.textContent,
      SECOND_DAY_NIGHT_TEMP.textContent,
      SECOND_DAY_WIND.textContent,
      THIRD_DAY_TEMP.textContent,
      THIRD_DAY_NIGHT_TEMP.textContent,
      THIRD_DAY_WIND.textContent,
    ] = [
      `${WEATHER_DATA["currentWeather"]["temperatureC"]}\xB0C`,
      `${WEATHER_DATA["currentWeather"]["temperatureC"]}\xB0C`,
      `${WEATHER_DATA["nextThreeDays"][1]["nighttemp_c"]}\xB0C`,
      `${WEATHER_DATA["currentWeather"]["windspeedKMH"]} km/h`,
      `${tempeartureObject["celsius"][0]}\xB0C`,
      `${tempeartureObject["celsius"][1]}\xB0C`,
      `${tempeartureObject["celsius"][2]}\xB0C`,
      `${tempeartureObject["celsius"][3]}\xB0C`,
      `${tempeartureObject["celsius"][4]}\xB0C`,
      `${WEATHER_DATA["currentWeather"]["temperatureC"]}\xB0C`,
      `${WEATHER_DATA["currentWeather"]["nightTemperatureC"]}\xB0C`,
      `${WEATHER_DATA["currentWeather"]["windspeedKMH"]} km/h`,
      `${WEATHER_DATA["nextThreeDays"][1]["temp_c"]}\xB0C`,
      `${WEATHER_DATA["nextThreeDays"][1]["nighttemp_c"]}\xB0C`,
      `${WEATHER_DATA["nextThreeDays"][1]["maximumWindSpeedKPH"]} km/h`,
      `${WEATHER_DATA["nextThreeDays"][2]["temp_c"]}\xB0C`,
      `${WEATHER_DATA["nextThreeDays"][2]["nighttemp_c"]}\xB0C`,
      `${WEATHER_DATA["nextThreeDays"][2]["maximumWindSpeedKMH"]} km/h`,
    ];
  } else {
    [
      HEADER_TEMP.textContent,
      TODAY_DAY_TEMP.textContent,
      TODAY_NIGHT_TEMP.textContent,
      TODAY_WIND.textContent,
      FIRST_HOUR_TEMP.textContent,
      SECOND_HOUR_TEMP.textContent,
      THIRD_HOUR_TEMP.textContent,
      FOURTH_HOUR_TEMP.textContent,
      FIFTH_HOUR_TEMP.textContent,
      FIRST_DAY_TEMP.textContent,
      FIRST_DAY_NIGHT_TEMP.textContent,
      FIRST_DAY_WIND.textContent,
      SECOND_DAY_TEMP.textContent,
      SECOND_DAY_NIGHT_TEMP.textContent,
      SECOND_DAY_WIND.textContent,
      THIRD_DAY_TEMP.textContent,
      THIRD_DAY_NIGHT_TEMP.textContent,
      THIRD_DAY_WIND.textContent,
    ] = [
      `${WEATHER_DATA["currentWeather"]["temperatureF"]}\xB0F`,
      `${WEATHER_DATA["currentWeather"]["temperatureF"]}\xB0F`,
      `${WEATHER_DATA["nextThreeDays"][1]["nighttemp_f"]}\xB0F`,
      `${WEATHER_DATA["currentWeather"]["windspeedMPH"]} mph`,
      `${tempeartureObject["fahrenheit"][0]}\xB0F`,
      `${tempeartureObject["fahrenheit"][1]}\xB0F`,
      `${tempeartureObject["fahrenheit"][2]}\xB0F`,
      `${tempeartureObject["fahrenheit"][3]}\xB0F`,
      `${tempeartureObject["fahrenheit"][4]}\xB0F`,
      `${WEATHER_DATA["currentWeather"]["temperatureF"]}\xB0F`,
      `${WEATHER_DATA["currentWeather"]["nightTemperatureF"]}\xB0F`,
      `${WEATHER_DATA["currentWeather"]["windspeedMPH"]} mph`,
      `${WEATHER_DATA["nextThreeDays"][1]["temp_f"]}\xB0F`,
      `${WEATHER_DATA["nextThreeDays"][1]["nighttemp_f"]}\xB0F`,
      `${WEATHER_DATA["nextThreeDays"][1]["maximumWindSpeedMPH"]} mph`,
      `${WEATHER_DATA["nextThreeDays"][2]["temp_f"]}\xB0F`,
      `${WEATHER_DATA["nextThreeDays"][2]["nighttemp_f"]}\xB0F`,
      `${WEATHER_DATA["nextThreeDays"][2]["maximumWindSpeedMPH"]} mph`,
    ];
  }
}

getCurrentWeather("Warsaw").then((result) => {
  (async () => {
    locationCurrentTime = result["location"]["localtime"];
    let weatherData = await createCurrentWeatherDataObject(result);
    refreshPage(await weatherData, result);
    localStorage.setItem("weatherData", JSON.stringify(weatherData));
  })();
});

getTimeInTwelveHourFormat();
