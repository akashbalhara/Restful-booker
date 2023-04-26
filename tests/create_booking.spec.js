// @ts-check
import { test, expect } from '@playwright/test';

test(" Create a booking ", async ({ request, baseURL }) => {

  // creating data required to make a booking
    const bookingData = {
        firstname: 'Akash',
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

    // saving api response as json in object
    const bookingDetails = await response.json();
    console.log(bookingDetails);
    // extracting first name as an example
    console.log(bookingDetails.booking.firstname);

    // assert that the api is working as expected
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    
  });