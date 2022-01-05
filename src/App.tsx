import {FC} from 'react';
import {apolloClient} from './apollo/client';
import {ApolloProvider} from '@apollo/client';
import Leaderboard from './components/LeaderboardAuto';
import UpdateLeaderboard from './components/UpdateLeaderboard';

const App:FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <UpdateLeaderboard />
        <Leaderboard />
      </div>
   </ApolloProvider>
  )
}

export default App;
