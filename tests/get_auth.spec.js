// @ts-check
import { test, expect } from '@playwright/test';

test(" Create-Token ", async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}auth`, {
      data: {
        username: 'admin',
        password: 'password123',
        
      },
      headers: {
        'Content-Type' : 'appication/json',

      },

    });

    // getting the api response
    console.log(await response.json());

    // assert that the api is working as expected
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

  });