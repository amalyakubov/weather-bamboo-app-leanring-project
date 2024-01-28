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

let tempUnits = "celsius";

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

function getNextSixHoursInDisplayForm() {
  let nextSixHoursArray24format = mapHoursToArray(getHours());

  let nextSixHoursArray = nextSixHoursArray24format.map((element) => {
    if (element === 0) {
      return `0:00`;
    } else {
      return `${element}:00`;
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
  let tomorrrow = new Date();
  tomorrrow.setDate(tomorrrow.getDate() + 1);
  let oneDayAfterTomorrow = new Date();
  oneDayAfterTomorrow.setDate(tomorrrow.getDate() + 1);
  let TwoDaysAfterTomorrow = new Date();
  TwoDaysAfterTomorrow.setDate(tomorrrow.getDate() + 2);

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
    tomorrrowAsWrittenDay,
    oneDayAfterTomorrowAsWrittenDay,
    TwoDaysAfterTomorrowAsWrittenDay,
  ] = [
    addSufixToDayNumber(tomorrrow.getDay()),
    addSufixToDayNumber(oneDayAfterTomorrow.getDay()),
    addSufixToDayNumber(TwoDaysAfterTomorrow.getDay()),
  ];

  let daysObject = {
    0: [days[tomorrrow.getDay()], tomorrrowAsWrittenDay],
    1: [days[oneDayAfterTomorrow.getDay()], oneDayAfterTomorrowAsWrittenDay],
    2: [days[TwoDaysAfterTomorrow.getDay()], TwoDaysAfterTomorrowAsWrittenDay],
  };
  return daysObject;
}

async function createCurrentWeatherDataObject(weatherData) {
  let nextSixHoursArray = mapHoursToArray(getHours());
  console.log("nextsixhours array:");
  console.log(nextSixHoursArray);
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

function getTodayTempObject(weatherData) {
  let nextSixHours = mapHoursToArray(getHours());

  let resultObject = {
    celsius: [
      weatherData["nextsixhours"][`${nextSixHours[0]}_tempC`],
      weatherData["nextsixhours"][`${nextSixHours[1]}_tempC`],
      weatherData["nextsixhours"][`${nextSixHours[2]}_tempC`],
      weatherData["nextsixhours"][`${nextSixHours[3]}_tempC`],
      weatherData["nextsixhours"][`${nextSixHours[4]}_tempC`],
      weatherData["nextsixhours"][`${nextSixHours[5]}_tempC`],
    ],
    fahrenheit: [
      weatherData["nextsixhours"][`${nextSixHours[0]}_tempF`],
      weatherData["nextsixhours"][`${nextSixHours[1]}_tempF`],
      weatherData["nextsixhours"][`${nextSixHours[2]}_tempF`],
      weatherData["nextsixhours"][`${nextSixHours[3]}_tempF`],
      weatherData["nextsixhours"][`${nextSixHours[4]}_tempF`],
      weatherData["nextsixhours"][`${nextSixHours[5]}_tempF`],
    ],
  };
  return resultObject;
}

function refreshPage(weatherData) {
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

  const [DAY_TEMP, NIGHT_TEMP, PERCEPITATION_TODAY, WIND_TODAY, UVINDEX_TODAY] =
    [
      document.getElementById("today-day-temp"),
      document.getElementById("today-night-temp"),
      document.getElementById("today-percepitation"),
      document.getElementById("today-wind"),
      document.getElementById("today-uv"),
    ];

  if (tempUnits === "celsius") {
    [DAY_TEMP.textContent, NIGHT_TEMP.textContent] = [
      `${weatherData["currentWeather"]["temperatureC"]}\xB0`,
      `${weatherData["currentWeather"]["nightTemperatureC"]}\xB0`,
    ];
  } else {
    [DAY_TEMP.textContent, NIGHT_TEMP.textContent] = [
      `${weatherData["currentWeather"]["temperatureF"]}\xB0`,
      `${weatherData["currentWeather"]["nightTemperatureF"]}\xB0`,
    ];
  }

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
  (async () => {
    let weatherData = await createCurrentWeatherDataObject(result);
    refreshPage(await weatherData);
  })();
});

console.log(getNextThreeDays());
