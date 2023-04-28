// get auuth
// create a new booking
// get booking id
// update booking


import { test, expect } from '@playwright/test';
test.describe(" Update booking ", async ({ request, baseURL }) => {

    test(" Getting Authentication Token", async ({request, baseURL}) => {
        const response = await request.post(`${baseURL}auth`, {
            data: {
              username: "admin",
              password: "password123",
              
            },
      
          });

          const tokenDetails = await response.json();
          const tokenNumber = tokenDetails.token ;
          return tokenNumber
    });


    test(" Creating a booking ", async ({ request, baseURL }) => {

        // creating data required to make a booking
        const bookingData = {
            firstname: 'Test',
            lastname: 'Balhara',
            totalprice: 6199,
            depositpaid: true,
            bookingdates: {
            checkin: '2023-04-25',
            checkout: '2023-05-30'
          },
          additionalneeds: 'Breakfast'
        };
  
        const response = await request.post(`${baseURL}booking/`, {data: bookingData});
  
        // assert that the api is working as expected
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
  
        // saving api response as json in object and extracting booking id
        const bookingDetails = await response.json();
        // extracting first name as an example
        const BookingID = bookingDetails.bookingid;

       return BookingID;
    });

    test(" Updating a booking ", async ({ request, baseURL }) => {
        
        // creating data required to make a booking
        const bookingData = {
            firstname: 'Test',
            lastname: 'Balhara',
            totalprice: 9166,
            depositpaid: true,
            bookingdates: {
            checkin: '2023-04-25',
            checkout: '2023-05-30'
          },
          additionalneeds: 'Lunch'
        };
  
        const response = await request.put(`${baseURL}booking/`+BookingID, {data: bookingData, headers : {Cookie:  tokenNumber}});
  
        // assert that the api is working as expected
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
  
        // saving api response as json in object and extracting booking id
        const bookingDetails = await response.json();
        // extracting first name as an example
        console.log(bookingDetails.booking.firstname);

       
    });

});