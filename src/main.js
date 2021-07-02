import  $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RateService from "./js/exchange";

function rate(response) {
  if (response) {
    $('#result').append(`<p>Current Exhcange Rates${response.conversion_rates.AED}</p>`);
  }
}








$(document).ready(function() {
  $('#rate').click(function() {
    RateService.getRate()
      .then(function(response) {
        rate(response);
      })
      .catch(function(error){
        $('#result').append(`<p>There's been an error and this is it: ${error}<p>`);
      });
  });
});