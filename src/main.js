import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doctorLookup } from './doctorLookup.js';

$(document).ready(function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    let name = $('#inputName').val();
    let issue = $('#inputIssue').val();
    let newLookup = new doctorLookup();
    let promise = newLookup.searchByIssue(issue);

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      body.data.forEach(function(item) {
        let name = item.profile.first_name + " " + item.profile.last_name + ", " + item.profile.title;
        let address = item.practices[0].visit_address.street + " " + item.practices[0].visit_address.street2 + ", "
        + item.practices[0].visit_address.city + ", " + item.practices[0].visit_address.state + ", " + item.practices[0].visit_address.zip;
        let phone = item.practices[0].phones[0].number;
        let website = item.practices[0].website;
        let acceptPt = item.practices[0].accepts_new_patients;
        $('#showListOfDoctors').append("<li>" + name + "<br>" + address + "<br>" + phone + "<br>" + "This doctor is accepting new patient: " + acceptPt + "<br>" + "Website: " + website + "</li>");
      })
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
