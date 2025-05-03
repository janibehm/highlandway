import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function POST({ request }) {
  const { email } = await request.json();

  // Check if environment variables are defined
  const API_KEY = env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = env.MAILCHIMP_AUDIENCE_ID;
  
  if (!API_KEY || !AUDIENCE_ID) {
    console.error('Missing required environment variables');
    return json({ 
      success: false, 
      error: 'Server configuration error' 
    }, { status: 500 });
  }

  const DATACENTER = API_KEY.split('-')[1];

  const res = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
    method: 'POST',
    headers: {
      Authorization: `apikey ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed'
    })
  });

  if (!res.ok) {
    return json({ success: false, error: 'Subscription failed' }, { status: 500 });
  }

  return json({ success: true });
}
