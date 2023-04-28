// @ts-check
import { test, expect } from '@playwright/test';

test(" Script to create and then delete a booking ", async ({ request, baseURL }) => {

  // getting token number for authoization
  const response = await request.post(`${baseURL}auth`, {data: {username: "admin", password: "password123"}});
  
  // saving the token 
  const BookingToken = await response.json();
  const tokenNumber = String(BookingToken.token);

  // creating a booking 
  const bookingData = {
    firstname: 'Akash',
    lastname: 'Delete',
    totalprice: 6199,
    depositpaid: true,
    bookingdates: {
      checkin: '2023-04-25',
      checkout: '2023-05-30'},
    additionalneeds: 'Breakfast'};

  // sending post request to make a booking with the above data
  const response1 = await request.post(`${baseURL}booking/`, {data: bookingData});
    
  // saving api response as json in object
  const bookingDetails = await response1.json();
  const BookingID = bookingDetails.bookingid;

  // saving the cookie value for the authorization
  const cookieVal = "token="+tokenNumber

  // deleting the booking
  const response2 = await request.delete(`${baseURL}booking/`+BookingID,{ headers : {Cookie:  cookieVal}});
  
  // assert that the correct status code is getting received
  expect(response2.status()).toBe(201);


});
