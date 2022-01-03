import {FC} from 'react';
import { useGetLeaderboardQuery} from '../generated/graphql';

const Leaderboard:FC = () => {
    const {data, loading} = useGetLeaderboardQuery({
        variables: {
            id: "R101"
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
                <div>{data?.getLeaderboard?.leaderboard?.eventName ?? " No Name"}</div>
                {
                    data?.getLeaderboard?.leaderboard?.rows?.map((currentRow) => {
                        return (
                            <div>{currentRow?.playerName}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Leaderboard;