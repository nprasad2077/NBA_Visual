// No need to import fetch in a browser environment

export default async function getData(query) {
  const data = JSON.stringify({ query });

  const response = await fetch(
    'https://nbaapi.com/graphql/',
    {
      method: 'POST', // HTTP method
      body: data, // Stringified query data
      headers: {
        'Content-Type': 'application/json' // Content type header
      },
    }
  );

  const json = await response.json(); // Parse the JSON response
  return json.data; // Return the response data
}
