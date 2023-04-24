// @ts-check
import { test, expect } from '@playwright/test';

test(" Get All Booking id ", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}booking`, {
    
    });
    
    // storing api response and the booking ids
    const apiResponse = await response.json();
    const bookingId = apiResponse.map(obj => obj["bookingid"]);

    

  });