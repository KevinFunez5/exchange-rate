export default class RateService {
  static getRate(userInputExchange) {
    return fetch(`https://v6.exchangerate-api.com/v6/007304291feade653405d100/pair/USD/${userInputExchange}`)
      .then(function(response) {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}