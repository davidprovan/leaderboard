import {FC} from 'react';
import {apolloClient} from './apollo/client';
import {ApolloProvider} from '@apollo/client';
import LeaderboardAuto from './components/LeaderboardAuto';
import UpdateLeaderboard from './components/UpdateLeaderboard';

const App:FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <LeaderboardAuto />
        <UpdateLeaderboard />
      </div>
   </ApolloProvider>
  )
}

export default App;
