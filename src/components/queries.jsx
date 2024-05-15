import { gql } from "@apollo/client";

export const GET_PLAYER_TOTALS = gql`
  query GetPlayerTotals($team: String!, $limit: Int, $id: Int) {
    playerTotals(team: $team, limit: $limit, id: $id) {
      id
      playerId
      playerName
      position
      team
      season
      games
      points
      assists
      totalRb
      offensiveRb
      defensiveRb
      blocks
      steals
      turnovers
      ft
      ftAttempts
      ftPercent
      twoAttempts
      twoFg
      twoPercent
      threeAttempts
      threeFg
      threePercent
      effectFgPercent
      fieldAttempts
      fieldGoals
      fieldPercent
      personalFouls
      minutesPg
      gamesStarted
    }
  }
`;
