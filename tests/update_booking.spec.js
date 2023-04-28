// @ts-check
import { test, expect } from '@playwright/test';

test(" Update a booking ", async ({ request, baseURL }) => {

  // getting token number for authoization
    const response = await request.post(`${baseURL}auth`, {data: {username: "admin", password: "password123"}});
  
  // saving the token 
  const BookingToken = await response.json();
  const tokenNumber = String(BookingToken.token);

  // creating a booking 
  const bookingData = {
    firstname: 'Akash',
    lastname: 'Balhara',
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

  // creating data for updating the booking 
  const updatedBookingData = {
    firstname: 'Test',
    lastname: 'Balhara',
    totalprice: 9166,
    depositpaid: true,
    bookingdates: {
      checkin: '2023-04-25',
      checkout: '2023-05-30'},
    additionalneeds: 'Lunch'};

  // saving the cookie value for the authorization
  const cookieVal = "token="+tokenNumber

  // udpating the booking
  const response2 = await request.put(`${baseURL}booking/`+BookingID, {data: updatedBookingData, headers : {Cookie:  cookieVal}});
  const updatedBookingDetails = await response2.json();

  // assert that the first name for the booking has been changed
  expect (bookingDetails.booking.firstname).not.toBe(updatedBookingDetails.firstname);





});