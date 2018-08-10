import { doctorLookups } from './../src/doctorLookup.js';

describe('Doctor Lookup', function() {

  it('should be able to enter a medical issue to receive a list of doctors', function() {
    let testIssue = "cold";
    expect(searchByIssue(testIssue)).toEqual();
  });

  it('should be able to enter a name to receive a list of doctors', function() {
    let testName = "John William";
    expect(searchByName(testName)).toEqual();
  });

  it('should return detail information of the doctor if found', function() {
    expect(findFirstName()).toEqual();
  });

  it('should return detail information of the doctor if found', function() {
    expect(findLastName()).toEqual();
  });

  it('should return detail information of the doctor if found', function() {
    expect(findAddress()).toEqual();
  });

  it('should return detail information of the doctor if found', function() {
    expect(findPhoneNum()).toEqual();
  });

  it('should return detail information of the doctor if found', function() {
    expect(findWebsite()).toEqual();
  });

  it('should return the doctor is accepting new patient', function() {
    expect(AcceptNewPt()).toEqual(true);
  });

  it('should return the doctor is not accepting new patient', function() {
    expect(AcceptNewPt()).toEqual(false);
  });

  it('should return a message for API call results in an error', function() {
    expect(error()).toEqual("");
  });

  it('should return a message if no doctors meet the search criteria', function() {
    expect(noMatch()).toEqual("");
  });
