import pkg from '@apollo/client';
const { gql } = pkg;

export const fetchQuery = async (userInput) => {
  const response = await fetch('http://127.0.0.1:8000/generate_query/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded', // Match content type
    },
    body: new URLSearchParams({ user_input: userInput }).toString(), // Match body format
  });

  const data = await response.json();
  // console.log(data.graphql_query);
  if (!data.graphql_query) {
    throw new Error('No query returned from the backend');
  }

  // Strip backticks and other unnecessary characters
  const cleanedQuery = data.graphql_query.replace(/```graphql/g, '').replace(/```/g, '').trim();
  // console.log(cleanedQuery);

  // Use the cleaned query directly
  return cleanedQuery;
};

const test = 'Show me the top 200 players by box in the 1998 playoffs. Only return fields player name, team, season, and box';

const testFetchQuery = async () => {
  try {
    const result = await fetchQuery(test);
    console.log(result);
  } catch (error) {
    console.error('Error fetching query:', error);
  }
};

testFetchQuery();
