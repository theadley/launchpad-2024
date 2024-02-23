function fetchWeatherForecast(
  lat,
  long,
  callbackSuccess,
  callbackFailure,
  callbackFinally
) {
  const callURL = `http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civillight&output=json`;

  fetch(callURL)
    .then((response) => response.text())
    .then((jsonResponseTxt) => {
      try {
        const jsonResponse = JSON.parse(jsonResponseTxt);
        // Validating response
        if (!jsonResponse?.dataseries) {
          throw new Error(
            `Invalid response from the API: "${jsonResponseTxt}"`
          );
        }
        const forecastResults = jsonResponse.dataseries;
        if (callbackSuccess) {
          callbackSuccess(forecastResults);
        }
      } catch (error) {
        throw new Error(`Invalid response from the API: "${jsonResponseTxt}"`);
      }
    })
    .catch((error) => {
      if (callbackFailure) {
        callbackFailure(forecastResults);
      }
      console.error('CATCH', error);
    })
    .finally(() => {
      if (callbackFinally) {
        callbackFinally(forecastResults);
      }
      console.log('Network call has been completed.');
    });
}

fetchWeatherForecast(-256.849491, 128.226526);
