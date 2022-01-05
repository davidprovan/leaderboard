import {FC} from 'react';
import { useGetLeaderboardQuery} from '../generated/graphql';

const Leaderboard:FC = () => {
    const {data, loading} = useGetLeaderboardQuery({
        variables: {
            id: "R2020493"
        }
    });
 

    if(loading){
        return (
            <div>Leaderboard loading</div>
        )
    }else{
        return (
            <div>
                <div>Leaderboard</div>
                <div>{data?.leaderboard?.eventId ?? " No Name"}</div>
                {
                    data?.leaderboard?.players?.map((currentPlayer) => {
                        return (
                            <div>{currentPlayer?.player?.displayName}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Leaderboard;