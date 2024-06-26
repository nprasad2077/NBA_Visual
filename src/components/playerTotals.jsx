import React from "react";
import { useQuery } from "@apollo/client";
import {GET_PLAYER_TOTALS} from './queries';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { CustomTooltip } from "./CustomTooltip";

const PlayerStats = () => {
    const { loading, error, data } = useQuery(GET_PLAYER_TOTALS, {
      variables: { team: 'HOU', limit: 10, ordering: '-points',},
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <div>
        <h2>Player Stats</h2>
        <BarChart
          width={1200}
          height={600}
          data={data.playerTotals}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="playerName" />
          <YAxis />
          <Tooltip content={<CustomTooltip/>} />
          <Legend />
          <Bar dataKey="points" fill="#8884d8" />
          <Bar dataKey="assists" fill="#82ca9d" />
          <Bar dataKey="totalRb" fill="#004778" />
          <Bar dataKey="steals" fill="#ff2000" />
        </BarChart>
      </div>
    );
  };
  
  export default PlayerStats;