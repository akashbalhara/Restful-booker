// @ts-check
import { test, expect } from '@playwright/test';

test(" Get Booking id ", async ({ request, baseURL }) => {

  // setting a random id number
    const id = 100;
    const response = await request.get(`${baseURL}booking/`+id, { });

    // saving api response as json in object
    const bookingDetails = await response.json();
    // extracting first name as an example
    console.log(bookingDetails.firstname);

    // assert that the api is working as expected
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    
  });