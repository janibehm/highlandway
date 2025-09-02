import { json } from '@sveltejs/kit';

export async function GET() {
  // Return an empty JSON response to prevent the 404 error
  return json({});
}
