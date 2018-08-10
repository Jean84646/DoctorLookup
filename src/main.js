import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doctorLookup } from './doctorLookup.js';

$(document).ready(function() {
  $('#issue-form').submit(function(event) {
    event.preventDefault();
    let issue = $('#inputIssue').val();
    let newLookup = new doctorLookup();
    let promise = newLookup.search(issue);

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      // $('#showListOfDocByIssue').append("<li>" +  + "</li>");
      // $('#showListOfDocByName').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
