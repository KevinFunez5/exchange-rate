import  $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RateService from "./js/exchange";

function rate(response) {
  if (response) {
    $('#result').append(`<p>Current Exhcange Rates ${response.conversion_rate}</p>`);
  }
}








$(document).ready(function() {
  $('#btn').click(function() {
    let userInputExchange = $('#exInput').val();
    event.preventDefault();
    RateService.getRate(userInputExchange)
      .then(function(response) {
        rate(response);
      })
      .catch(function(error){
        $('#result').append(`<p>There's been an error and this is it: ${error}<p>`);
      });
  });
});