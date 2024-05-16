// src/QueryGenerator.js
import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import ReactVirtualizedTable from './ReactVirtualizedTable';

const QueryGenerator = () => {
  const [userInput, setUserInput] = useState('');
  const [dynamicQuery, setDynamicQuery] = useState(null);
  const [fetchData, { loading, error, data }] = useLazyQuery(dynamicQuery, {
    fetchPolicy: 'network-only',
  });

  const handleUserInput = async (e) => {
    e.preventDefault();
    const generatedQuery = await fetchQuery(userInput);
    setDynamicQuery(generatedQuery);
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleUserInput}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your query input"
        />
        <button type="submit">Fetch Data</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <ReactVirtualizedTable data={data.dynamicQuery} />}
    </div>
  );
};

export default QueryGenerator;
