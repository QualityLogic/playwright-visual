import { test, expect, request } from '@playwright/test';

const authServiceEndPoint = 'https://kytestweb.cdpehs.com/oauth/connect/token';
const username = 'Quality.logic';
const password = 'p@ssword123';

test('Add Update Benefits Method', async ({ request }) => {

  const response = await request.post('https://kytestweb.cdpehs.com/WUMEI/EBT2/2018.1-Preview/WicEbaAccount/GetEbaDetails', {
    data : {
      "messageHeader": {
        "clinicId": "{{clinicId}}",
        "transmissionDateTime": "{{currentDateTime}}",
        "initiatingUserId": "{{initiatingUserId}}",
        "localAgencyId": "{{localAgencyId}}",
        "messageOrFileTypeCode": 2000,
        "messageVersion": "{{messageVersion}}",
        "uniqueTransactionId": "{{currentDatetimeMs}}",
        "username": "{{username}}",
        "wicEbtSystemId": "{{wicEbtSystemId}}",
        "wicMisSystemId": "{{wicMisSystemId}}",
        "wicStateAgencyId": "{{wicStateAgencyId}}",
        "workstationId": "{{workstationId}}"
      }
  },
  }
  ), expect (response.status()).toBe(200);
});