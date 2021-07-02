import  $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RateService from "./js/exchange";

function rateMe(response) {
  $('#result').append(`<p>Current Exhcange Rates:<span id="exrate">${response.conversion_rates} `);
}








$(document).ready(function() {
  $('rate').click(function() {
    RateService.rateMe()
      .then(function(response) {
        rateMe(response);
      })
      .catch(function(error){
        $('#result').append(`<p>There's been an error and this is it: ${error}<p>`);
      });
  });
});