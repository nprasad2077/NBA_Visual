import { gql } from "@apollo/client";
import  client  from "./apolloClient.js";

console.log("client:", client);

export const fetchQuery = async (userInput) => {
  try {
    // Fetch the GraphQL query from the backend
    const response = await fetch("http://127.0.0.1:8000/generate_query/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Match content type
      },
      body: new URLSearchParams({ user_input: userInput }).toString(), // Match body format
    });

    console.log(userInput);

    const data = await response.json();
    if (!data.graphql_query) {
      throw new Error("No query returned from the backend");
    }

    // Strip backticks and other unnecessary characters
    const cleanedQuery = data.graphql_query
      .replace(/```graphql/g, "")
      .replace(/```/g, "")
      .trim();

    // Log the cleaned query to debug
    console.log("Cleaned Query:", cleanedQuery);

    // Execute the cleaned query using Apollo Client
    const result = await client.query({
      query: gql`
        ${cleanedQuery}
      `,
    });

    // Log the result of the query
    // console.log('Query Result:', result.data);

    // Return the result data
    return result.data;
  } catch (error) {
    if (error.networkError) {
      console.error("Network Error:", error.networkError);
      if (error.networkError.result && error.networkError.result.errors) {
        console.error("GraphQL Errors:", error.networkError.result.errors);
      }
    } else {
      console.error("Error fetching and executing query:", error);
    }
    throw error;
  }
};

const test =
  "Show me the top 1 player by points in the 2024 playoffs. Only return fields player name, team, season, points, and total rebounds.";

const testFetchQuery = async () => {
  try {
    const result = await fetchQuery(test);
    console.log("Final Result:", result);
  } catch (error) {
    console.error("Error during testFetchQuery:", error);
  }
};

testFetchQuery();
