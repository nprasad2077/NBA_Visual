import { gql } from "@apollo/client";

export const GET_PLAYER_TOTALS = gql`
  query GetPlayerTotals($team: String!, $limit: Int) {
    playerTotals(team: $team, limit: $limit) {
      id
      team
      playerName
      blocks
      assists
      ftPercent
      games
      totalRb
      turnovers
      season
      points
      position
    }
  }
`;