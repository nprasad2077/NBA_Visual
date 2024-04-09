import fetch from 'node-fetch'

async function getData() {
  const data = JSON.stringify({
    query: `{
        team(teamAbbr: "HOU", limit: 10) {
          id
          teamName
          season
          wins
        }
      }`,
  });

  const response = await fetch(
    'https://nbaapi.com/graphql/',
    {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      },
    }
  );

  const json = await response.json();
  console.log(json.data);
}

getData();
