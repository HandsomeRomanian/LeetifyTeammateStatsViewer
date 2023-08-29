export interface LeetifyUserData {
  club?: Club;
  highlights?: Highlight[];
  personalBests?: PersonalBest[];
  recentGameRatings?: RecentGameRatings;
  teammates?: Teammate[];
  games?: Game[];
  meta: Meta;
}

export interface ClubShort {
  name: string;
  tag: string;
}
export interface Club extends ClubShort {
  averageRanks: AverageRank[];
  id: string;
  winRate: number;
}

export interface AverageRank {
  dataSource: string;
  skillLevel: number;
}

export interface Highlight {
  createdAt: string;
  description: string;
  gameId: string;
  id: string;
  isPinned: boolean;
  pendingPro: boolean;
  rankValue: any;
  roundNumber: number;
  steam64Id: string;
  thumbnailUrl: string;
  url: string;
  username: string;
}

export interface PersonalBest {
  gameId: string;
  skillId: string;
  value: string;
}

export interface RecentGameRatings {
  aim: number;
  positioning: number;
  utility: number;
  gamesPlayed: number;
  clutch: number;
  ctLeetify: number;
  leetify: number;
  opening: number;
  tLeetify: number;
}
export interface Teammate {
  isCollector: boolean;
  isProPlan: boolean;
  leetifyUserId: string;
  club: ClubShort;
  isBanned: boolean;
  isLeetifyStaff: boolean;
  matchesPlayedTogether: number;
  profileUserLeetifyRating: number;
  ranks: Rank[];
  steam64Id: string;
  steamAvatarUrl: string;
  steamNickname: string;
  teammateLeetifyRating: number;
  winRateTogether: number;
}

export interface Rank {
  dataSource: string;
  skillLevel: number;
}

export interface Game {
  enemyTeamSteam64Ids: string[];
  isCompletedLongMatch: boolean;
  ownTeamSteam64Ids: string[];
  ownTeamTotalLeetifyRatingRounds: OwnTeamTotalLeetifyRatingRounds;
  ownTeamTotalLeetifyRatings: OwnTeamTotalLeetifyRatings;
  ctLeetifyRating?: number;
  ctLeetifyRatingRounds?: number;
  dataSource: string;
  elo?: number;
  gameFinishedAt: string;
  gameId: string;
  isCs2: boolean;
  mapName: string;
  matchResult: string;
  scores: number[];
  skillLevel?: number;
  tLeetifyRating?: number;
  tLeetifyRatingRounds?: number;
  deaths?: number;
  hasBannedPlayer?: boolean;
  kills?: number;
  partySize?: number;
}
export type OwnTeamTotalLeetifyRatingRounds = Map<String, number>;
export type OwnTeamTotalLeetifyRatings = Map<String, number>;
export interface Meta {
  name: string;
  steam64Id: string;
  steamAvatarUrl: string;
  isCollector: boolean;
  isLeetifyStaff: boolean;
  isProPlan: boolean;
  leetifyUserId: string;
  faceitNickname: string;
  platformBans: any[];
}
