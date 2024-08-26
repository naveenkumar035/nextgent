import axios from 'axios';

export async function POST(request) {
  try {
    const { instrumentKey, interval, fromDate, toDate } = await request.json();

    if (!instrumentKey || !interval || !fromDate || !toDate) {
      return new Response(JSON.stringify({ error: 'Missing required parameters' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Replace with your actual client ID, client secret, and redirect URI
    const clientId = "3e637ff9-421d-4877-ae7c-d29d69580dfd";
    const clientSecret = "sbe2bd1naf";
    const redirectUri = "http://localhost:3000/callback";

    // Step 1: Get authorization code (simulate or handle separately)
    const authUrl = `https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=optional_state_parameter`;

    // Step 2: Use a mock authorization code for demonstration
    const authorizationCode = 'mock_authorization_code'; // Replace this with the actual authorization code handling

    // Step 3: Exchange authorization code for access token
    const tokenUrl = "https://api.upstox.com/v2/login/authorization/token";
    const tokenResponse = await axios.post(tokenUrl, {
      grant_type: "authorization_code",
      code: authorizationCode,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret
    });

    const { access_token } = tokenResponse.data;

    if (!access_token) {
      throw new Error('Failed to obtain access token');
    }

    // Step 4: Fetch historical data using the access token
    const apiUrl = `https://api.upstox.com/v2/historical-candle/${instrumentKey}/${interval}/${toDate}/${fromDate}`;
    const dataResponse = await axios.get(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${access_token}`
      }
    });

    return new Response(JSON.stringify(dataResponse.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error occurred:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
