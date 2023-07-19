import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ request }) => {
  // Send authentication request. Replace with your own.
  await request.post('https://kytestweb.cdpehs.com/oauth/connect/token', {
    data: {
      'client_id': 'EBT2.4',
      'client_secret': 'p@ssword123'
    }
  });
  await request.storageState({ path: authFile });
});