import fetch from 'node-fetch';

const API_URL = 'https://nbaapi.com/graphql/';

const query = `
query MyQuery {
  team(teamAbbr: "HOU", limit: 10) {
    id
    teamName
    season
    wins
  }
}`;

fetch(API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query }),
})
  .then(res => res.json())
  .then(data => console.log(JSON.stringify(data)));
