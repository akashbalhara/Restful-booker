// @ts-check
import { test, expect } from '@playwright/test';

test(" Create-Token ", async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}auth`, {
      data: {
        username: "admin",
        password: "password123",
        
      },
      headers: {
        'Content-Type' : 'appication/json',

      },

    });
    
    console.log(await response);
    console.log(await response.json());
    console.log(await response.body());

  });