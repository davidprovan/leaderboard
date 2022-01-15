import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `AWSTimestamp` scalar type provided by AWS AppSync, represents the number of seconds that have elapsed since `1970-01-01T00:00Z`. Negative values are also accepted and these represent the number of seconds till `1970-01-01T00:00Z`.  Timestamps are serialized and deserialized as integers. The minimum supported timestamp value is **`-31557014167219200`** which corresponds to `-1000000000-01-01T00:00Z`. The maximum supported timestamp value is **`31556889864403199`** which corresponds to `1000000000-12-31T23:59:59.999999999Z`. */
  AWSTimestamp: any;
};

export type BettingData = {
  __typename?: 'BettingData';
  displayIcon?: Maybe<Scalars['String']>;
  displayText?: Maybe<Scalars['String']>;
  type?: Maybe<BettingDataType>;
};

export type BettingDataInput = {
  displayIcon?: InputMaybe<Scalars['String']>;
  displayText?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<BettingDataType>;
};

export enum BettingDataType {
  Finishes = 'FINISHES',
  Matchups = 'MATCHUPS',
  NationalityProps = 'NATIONALITY_PROPS',
  PlayerProps = 'PLAYER_PROPS',
  ToWin = 'TO_WIN'
}

export type Course = {
  __typename?: 'Course';
  courseCode?: Maybe<Scalars['String']>;
  courseName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  scoringLevel?: Maybe<ScoringLevel>;
};

export type CutLine = {
  __typename?: 'CutLine';
  id: Scalars['ID'];
  score?: Maybe<Scalars['String']>;
  type?: Maybe<CutLineType>;
};

export type CutLineInput = {
  id: Scalars['ID'];
  score?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<CutLineType>;
};

export enum CutLineType {
  Official = 'OFFICIAL',
  Projected = 'PROJECTED'
}

export type Groups = {
  __typename?: 'Groups';
  backNine?: Maybe<Scalars['Boolean']>;
  courses: Array<Maybe<Course>>;
  groupLocation?: Maybe<Scalars['String']>;
  players: Array<Maybe<Player>>;
  startTee?: Maybe<Scalars['Int']>;
  teeTime?: Maybe<Scalars['AWSTimestamp']>;
};

export type Leaderboard = {
  __typename?: 'Leaderboard';
  activeRounds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  adPositions?: Maybe<Array<Maybe<Scalars['Int']>>>;
  betting?: Maybe<Array<Maybe<BettingData>>>;
  cutLine?: Maybe<CutLine>;
  displayText?: Maybe<Scalars['String']>;
  eventId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  players?: Maybe<Array<Maybe<LeaderboardRow>>>;
  roundStatsColor?: Maybe<Scalars['String']>;
  roundStatus?: Maybe<Scalars['String']>;
  scoringLevel?: Maybe<ScoringLevel>;
  scoringType?: Maybe<ScoringType>;
  statusDisplay?: Maybe<Scalars['String']>;
  statusHeader?: Maybe<Scalars['String']>;
  statusIcon?: Maybe<LeaderboardIcon>;
  tournament?: Maybe<Tournament>;
};

export enum LeaderboardIcon {
  Delay = 'DELAY',
  None = 'NONE'
}

export type LeaderboardInput = {
  activeRounds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  betting?: InputMaybe<Array<InputMaybe<BettingDataInput>>>;
  cutLine?: InputMaybe<CutLineInput>;
  displayText?: InputMaybe<Scalars['String']>;
  eventId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  players?: InputMaybe<Array<InputMaybe<LeaderboardRowInput>>>;
  roundStatsColor?: InputMaybe<Scalars['String']>;
  roundStatus?: InputMaybe<Scalars['String']>;
  scoringLevel?: InputMaybe<ScoringLevel>;
  scoringType?: InputMaybe<ScoringType>;
  statusDisplay?: InputMaybe<Scalars['String']>;
  statusHeader?: InputMaybe<Scalars['String']>;
  statusIcon?: InputMaybe<LeaderboardIcon>;
};

export type LeaderboardRow = {
  __typename?: 'LeaderboardRow';
  backNine?: Maybe<Scalars['Boolean']>;
  country?: Maybe<Scalars['String']>;
  currentRound?: Maybe<Scalars['String']>;
  displayText?: Maybe<Scalars['String']>;
  leaderboardSortOrder?: Maybe<Scalars['Int']>;
  liveChannel?: Maybe<Scalars['String']>;
  liveVideoState?: Maybe<LiveVideoState>;
  par?: Maybe<Scalars['Int']>;
  player?: Maybe<Player>;
  playerSponsor?: Maybe<PlayerSponsor>;
  position?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['String']>;
  shotDetails?: Maybe<Scalars['String']>;
  teeTime?: Maybe<Scalars['AWSTimestamp']>;
  textScore?: Maybe<Scalars['String']>;
  thru?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['String']>;
  type?: Maybe<LeaderboardRowType>;
  yardage?: Maybe<Scalars['Int']>;
};

export type LeaderboardRowInput = {
  backNine?: InputMaybe<Scalars['Boolean']>;
  country?: InputMaybe<Scalars['String']>;
  currentRound?: InputMaybe<Scalars['String']>;
  displayText?: InputMaybe<Scalars['String']>;
  leaderboardSortOrder?: InputMaybe<Scalars['Int']>;
  liveChannel?: InputMaybe<Scalars['String']>;
  liveVideoState?: InputMaybe<LiveVideoState>;
  par?: InputMaybe<Scalars['Int']>;
  player?: InputMaybe<PlayerInput>;
  playerSponsor?: InputMaybe<PlayerSponsor>;
  position?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['String']>;
  shotDetails?: InputMaybe<Scalars['String']>;
  teeTime?: InputMaybe<Scalars['AWSTimestamp']>;
  textScore?: InputMaybe<Scalars['String']>;
  thru?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<LeaderboardRowType>;
  yardage?: InputMaybe<Scalars['Int']>;
};

export enum LeaderboardRowType {
  CutLine = 'CUT_LINE',
  Player = 'PLAYER',
  PlayOff = 'PLAY_OFF'
}

export enum LiveVideoState {
  LiveNow = 'LIVE_NOW',
  None = 'NONE',
  Upcoming = 'UPCOMING'
}

export type Mutation = {
  __typename?: 'Mutation';
  updateLeaderboard?: Maybe<Leaderboard>;
};


export type MutationUpdateLeaderboardArgs = {
  leaderboard?: InputMaybe<LeaderboardInput>;
};

export type Player = {
  __typename?: 'Player';
  amateur?: Maybe<Scalars['Boolean']>;
  country?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  favorite?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
};

export type PlayerInput = {
  amateur?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  shortName?: InputMaybe<Scalars['String']>;
};

export enum PlayerSponsor {
  None = 'NONE',
  Titlelist = 'TITLELIST'
}

export type Query = {
  __typename?: 'Query';
  leaderboard?: Maybe<Leaderboard>;
  teeTimes?: Maybe<TeeTimes>;
};


export type QueryLeaderboardArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTeeTimesArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ScoringLevel {
  Basic = 'BASIC',
  Stats = 'STATS',
  Tourcast = 'TOURCAST'
}

export enum ScoringType {
  MatchPlay = 'MATCH_PLAY',
  StrokePlay = 'STROKE_PLAY',
  TeamCup = 'TEAM_CUP',
  TeamStroke = 'TEAM_STROKE'
}

export type Standings = {
  __typename?: 'Standings';
  effectiveDate?: Maybe<Scalars['AWSTimestamp']>;
  id: Scalars['ID'];
  leaderboard?: Maybe<Leaderboard>;
  logo?: Maybe<Scalars['String']>;
  standingsName?: Maybe<Scalars['String']>;
  status?: Maybe<StandingsStatus>;
  title?: Maybe<Scalars['String']>;
};

export enum StandingsStatus {
  Official = 'OFFICIAL',
  Projected = 'PROJECTED'
}

export type Subscription = {
  __typename?: 'Subscription';
  onUpdateLeaderboard?: Maybe<Leaderboard>;
};


export type SubscriptionOnUpdateLeaderboardArgs = {
  id: Scalars['ID'];
};

export type TeeTimeRound = {
  __typename?: 'TeeTimeRound';
  groups: Array<Maybe<Groups>>;
  id: Scalars['ID'];
  roundDisplayText?: Maybe<Scalars['String']>;
  roundInt?: Maybe<Scalars['Int']>;
  roundStatus?: Maybe<Scalars['String']>;
};

export type TeeTimes = {
  __typename?: 'TeeTimes';
  defaultRound?: Maybe<Scalars['Int']>;
  eventId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastUpdated?: Maybe<Scalars['AWSTimestamp']>;
  rounds?: Maybe<Array<Maybe<TeeTimeRound>>>;
};

export type Tournament = {
  __typename?: 'Tournament';
  courses?: Maybe<Array<Maybe<Course>>>;
  currentRound?: Maybe<Scalars['Int']>;
  currentWeather?: Maybe<Weather>;
  id: Scalars['ID'];
  roundStatus?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  tournamentLogo?: Maybe<Scalars['String']>;
  tournamentName?: Maybe<Scalars['String']>;
};

export type Weather = {
  __typename?: 'Weather';
  condition?: Maybe<Scalars['String']>;
  humidity?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  sponsor?: Maybe<Scalars['String']>;
  tempC?: Maybe<Scalars['String']>;
  tempF?: Maybe<Scalars['String']>;
  windDirection?: Maybe<Scalars['String']>;
  windSpeed?: Maybe<Scalars['String']>;
};

export type GetLeaderboardQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetLeaderboardQuery = { __typename?: 'Query', leaderboard?: { __typename?: 'Leaderboard', id: string, eventId?: string | null | undefined, players?: Array<{ __typename?: 'LeaderboardRow', type?: LeaderboardRowType | null | undefined, position?: string | null | undefined, displayText?: string | null | undefined, total?: string | null | undefined, thru?: string | null | undefined, score?: string | null | undefined, teeTime?: any | null | undefined, country?: string | null | undefined, player?: { __typename?: 'Player', id: string, firstName?: string | null | undefined, lastName?: string | null | undefined, shortName?: string | null | undefined, displayName?: string | null | undefined, amateur?: boolean | null | undefined, favorite?: boolean | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetTeeTimesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTeeTimesQuery = { __typename?: 'Query', teeTimes?: { __typename?: 'TeeTimes', defaultRound?: number | null | undefined, id: string, rounds?: Array<{ __typename?: 'TeeTimeRound', roundDisplayText?: string | null | undefined, roundInt?: number | null | undefined, roundStatus?: string | null | undefined, id: string, groups: Array<{ __typename?: 'Groups', backNine?: boolean | null | undefined, startTee?: number | null | undefined, teeTime?: any | null | undefined, players: Array<{ __typename?: 'Player', amateur?: boolean | null | undefined, country?: string | null | undefined, displayName?: string | null | undefined, favorite?: boolean | null | undefined, firstName?: string | null | undefined, id: string, lastName?: string | null | undefined, shortName?: string | null | undefined } | null | undefined>, courses: Array<{ __typename?: 'Course', courseCode?: string | null | undefined, courseName?: string | null | undefined, id: string, scoringLevel?: ScoringLevel | null | undefined } | null | undefined> } | null | undefined> } | null | undefined> | null | undefined } | null | undefined };

export type OnUpdateLeaderboardSubscriptionVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OnUpdateLeaderboardSubscription = { __typename?: 'Subscription', onUpdateLeaderboard?: { __typename?: 'Leaderboard', id: string, eventId?: string | null | undefined, players?: Array<{ __typename?: 'LeaderboardRow', type?: LeaderboardRowType | null | undefined, position?: string | null | undefined, displayText?: string | null | undefined, total?: string | null | undefined, thru?: string | null | undefined, score?: string | null | undefined, teeTime?: any | null | undefined, country?: string | null | undefined, player?: { __typename?: 'Player', id: string, firstName?: string | null | undefined, lastName?: string | null | undefined, shortName?: string | null | undefined, displayName?: string | null | undefined, amateur?: boolean | null | undefined, favorite?: boolean | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type UpdateLeaderboardMutationVariables = Exact<{
  leaderboardDataInput?: InputMaybe<LeaderboardInput>;
}>;


export type UpdateLeaderboardMutation = { __typename?: 'Mutation', updateLeaderboard?: { __typename?: 'Leaderboard', id: string, eventId?: string | null | undefined, players?: Array<{ __typename?: 'LeaderboardRow', type?: LeaderboardRowType | null | undefined, position?: string | null | undefined, displayText?: string | null | undefined, total?: string | null | undefined, thru?: string | null | undefined, score?: string | null | undefined, teeTime?: any | null | undefined, country?: string | null | undefined, player?: { __typename?: 'Player', id: string, firstName?: string | null | undefined, lastName?: string | null | undefined, shortName?: string | null | undefined, displayName?: string | null | undefined, amateur?: boolean | null | undefined, favorite?: boolean | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const GetLeaderboardDocument = gql`
    query getLeaderboard($id: ID!) {
  leaderboard(id: $id) {
    id
    eventId
    players {
      type
      position
      displayText
      player {
        id
        firstName
        lastName
        shortName
        displayName
        amateur
        favorite
      }
      total
      thru
      score
      teeTime
      country
    }
  }
}
    `;

/**
 * __useGetLeaderboardQuery__
 *
 * To run a query within a React component, call `useGetLeaderboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLeaderboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeaderboardQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLeaderboardQuery(baseOptions: Apollo.QueryHookOptions<GetLeaderboardQuery, GetLeaderboardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLeaderboardQuery, GetLeaderboardQueryVariables>(GetLeaderboardDocument, options);
      }
export function useGetLeaderboardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLeaderboardQuery, GetLeaderboardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLeaderboardQuery, GetLeaderboardQueryVariables>(GetLeaderboardDocument, options);
        }
export type GetLeaderboardQueryHookResult = ReturnType<typeof useGetLeaderboardQuery>;
export type GetLeaderboardLazyQueryHookResult = ReturnType<typeof useGetLeaderboardLazyQuery>;
export type GetLeaderboardQueryResult = Apollo.QueryResult<GetLeaderboardQuery, GetLeaderboardQueryVariables>;
export const GetTeeTimesDocument = gql`
    query getTeeTimes($id: ID!) {
  teeTimes(id: $id) {
    defaultRound
    rounds {
      groups {
        backNine
        players {
          amateur
          country
          displayName
          favorite
          firstName
          id
          lastName
          shortName
        }
        startTee
        teeTime
        courses {
          courseCode
          courseName
          id
          scoringLevel
        }
      }
      roundDisplayText
      roundInt
      roundStatus
      id
    }
    id
  }
}
    `;

/**
 * __useGetTeeTimesQuery__
 *
 * To run a query within a React component, call `useGetTeeTimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeeTimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeeTimesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTeeTimesQuery(baseOptions: Apollo.QueryHookOptions<GetTeeTimesQuery, GetTeeTimesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeeTimesQuery, GetTeeTimesQueryVariables>(GetTeeTimesDocument, options);
      }
export function useGetTeeTimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeeTimesQuery, GetTeeTimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeeTimesQuery, GetTeeTimesQueryVariables>(GetTeeTimesDocument, options);
        }
export type GetTeeTimesQueryHookResult = ReturnType<typeof useGetTeeTimesQuery>;
export type GetTeeTimesLazyQueryHookResult = ReturnType<typeof useGetTeeTimesLazyQuery>;
export type GetTeeTimesQueryResult = Apollo.QueryResult<GetTeeTimesQuery, GetTeeTimesQueryVariables>;
export const OnUpdateLeaderboardDocument = gql`
    subscription onUpdateLeaderboard($id: ID!) {
  onUpdateLeaderboard(id: $id) {
    id
    eventId
    players {
      type
      position
      displayText
      player {
        id
        firstName
        lastName
        shortName
        displayName
        amateur
        favorite
      }
      total
      thru
      score
      teeTime
      country
    }
  }
}
    `;

/**
 * __useOnUpdateLeaderboardSubscription__
 *
 * To run a query within a React component, call `useOnUpdateLeaderboardSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateLeaderboardSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdateLeaderboardSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOnUpdateLeaderboardSubscription(baseOptions: Apollo.SubscriptionHookOptions<OnUpdateLeaderboardSubscription, OnUpdateLeaderboardSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnUpdateLeaderboardSubscription, OnUpdateLeaderboardSubscriptionVariables>(OnUpdateLeaderboardDocument, options);
      }
export type OnUpdateLeaderboardSubscriptionHookResult = ReturnType<typeof useOnUpdateLeaderboardSubscription>;
export type OnUpdateLeaderboardSubscriptionResult = Apollo.SubscriptionResult<OnUpdateLeaderboardSubscription>;
export const UpdateLeaderboardDocument = gql`
    mutation updateLeaderboard($leaderboardDataInput: LeaderboardInput) {
  updateLeaderboard(leaderboard: $leaderboardDataInput) {
    id
    eventId
    players {
      type
      position
      displayText
      player {
        id
        firstName
        lastName
        shortName
        displayName
        amateur
        favorite
      }
      total
      thru
      score
      teeTime
      country
    }
  }
}
    `;
export type UpdateLeaderboardMutationFn = Apollo.MutationFunction<UpdateLeaderboardMutation, UpdateLeaderboardMutationVariables>;

/**
 * __useUpdateLeaderboardMutation__
 *
 * To run a mutation, you first call `useUpdateLeaderboardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLeaderboardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLeaderboardMutation, { data, loading, error }] = useUpdateLeaderboardMutation({
 *   variables: {
 *      leaderboardDataInput: // value for 'leaderboardDataInput'
 *   },
 * });
 */
export function useUpdateLeaderboardMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLeaderboardMutation, UpdateLeaderboardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLeaderboardMutation, UpdateLeaderboardMutationVariables>(UpdateLeaderboardDocument, options);
      }
export type UpdateLeaderboardMutationHookResult = ReturnType<typeof useUpdateLeaderboardMutation>;
export type UpdateLeaderboardMutationResult = Apollo.MutationResult<UpdateLeaderboardMutation>;
export type UpdateLeaderboardMutationOptions = Apollo.BaseMutationOptions<UpdateLeaderboardMutation, UpdateLeaderboardMutationVariables>;