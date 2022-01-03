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
};

export type Leaderboard = {
  __typename?: 'Leaderboard';
  id: Scalars['ID'];
  leaderboard?: Maybe<LeaderboardData>;
};

export type LeaderboardData = {
  __typename?: 'LeaderboardData';
  eventName: Scalars['String'];
  id: Scalars['ID'];
  rows?: Maybe<Array<Maybe<LeaderboardRow>>>;
};

export type LeaderboardDataInput = {
  evenName: Scalars['String'];
  id: Scalars['ID'];
  rows?: InputMaybe<Array<InputMaybe<LeaderboardRowInput>>>;
};

export type LeaderboardRow = {
  __typename?: 'LeaderboardRow';
  movement?: Maybe<Scalars['String']>;
  playerName?: Maybe<Scalars['String']>;
  thru?: Maybe<Scalars['String']>;
  today?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['String']>;
};

export type LeaderboardRowInput = {
  movement?: InputMaybe<Scalars['String']>;
  playerName?: InputMaybe<Scalars['String']>;
  thru?: InputMaybe<Scalars['String']>;
  today?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateLeaderboard?: Maybe<LeaderboardData>;
};


export type MutationUpdateLeaderboardArgs = {
  leaderboardDataInput?: InputMaybe<LeaderboardDataInput>;
};

export type Query = {
  __typename?: 'Query';
  getLeaderboard?: Maybe<Leaderboard>;
};


export type QueryGetLeaderboardArgs = {
  id: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onUpdateLeaderboard?: Maybe<LeaderboardData>;
};


export type SubscriptionOnUpdateLeaderboardArgs = {
  id: Scalars['ID'];
};

export type GetLeaderboardQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetLeaderboardQuery = { __typename?: 'Query', getLeaderboard?: { __typename?: 'Leaderboard', id: string, leaderboard?: { __typename?: 'LeaderboardData', eventName: string, rows?: Array<{ __typename?: 'LeaderboardRow', movement?: string | null | undefined, playerName?: string | null | undefined, thru?: string | null | undefined, today?: string | null | undefined, total?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined };

export type OnUpdateLeaderboardSubscriptionVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OnUpdateLeaderboardSubscription = { __typename?: 'Subscription', onUpdateLeaderboard?: { __typename?: 'LeaderboardData', eventName: string, rows?: Array<{ __typename?: 'LeaderboardRow', movement?: string | null | undefined, playerName?: string | null | undefined, today?: string | null | undefined, total?: string | null | undefined, thru?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type UpdateLeaderboardMutationVariables = Exact<{
  leaderboardDataInput?: InputMaybe<LeaderboardDataInput>;
}>;


export type UpdateLeaderboardMutation = { __typename?: 'Mutation', updateLeaderboard?: { __typename?: 'LeaderboardData', id: string, eventName: string, rows?: Array<{ __typename?: 'LeaderboardRow', movement?: string | null | undefined, playerName?: string | null | undefined, thru?: string | null | undefined, today?: string | null | undefined, total?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const GetLeaderboardDocument = gql`
    query getLeaderboard($id: ID!) {
  getLeaderboard(id: $id) {
    id
    leaderboard {
      eventName
      rows {
        movement
        playerName
        thru
        today
        total
      }
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
export const OnUpdateLeaderboardDocument = gql`
    subscription onUpdateLeaderboard($id: ID!) {
  onUpdateLeaderboard(id: $id) {
    eventName
    rows {
      movement
      playerName
      today
      total
      thru
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
    mutation updateLeaderboard($leaderboardDataInput: LeaderboardDataInput) {
  updateLeaderboard(leaderboardDataInput: $leaderboardDataInput) {
    id
    eventName
    rows {
      movement
      playerName
      thru
      today
      total
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