import { test, expect, request } from '@playwright/test';

test('Playwright API Testing', async ({ request }) => {
  const baseUrl = 'https://kytestweb.cdpehs.com/EBT2/AccountManagement/AccountDetails.aspx'

  await request.post(`${baseUrl}`), {
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
    "actionCode": "001",
  
    "wicMisAccountId": "99999991",
    "reasonCode": "B001",
    "benefitBalance": [
      {
        "benefitIssuanceId": 999993999,
        "benefitIssuanceSequenceNumber": 1,
        "beginBenefitDate": "2023-10-01",
        "endBenefitDate": "2023-10-31",
        "foodBenefitBalance": [
          {
            "benefitQuantity": 30.00,
            "categoryCode": "19",
            "categoryLongDescription": "BT Testing",
            "subcategoryCode": "000",
            "subcategoryLongDescription": "BT Testing"
          }
        ]
      }
    ]
  }
});