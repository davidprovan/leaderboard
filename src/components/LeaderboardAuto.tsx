import {FC} from 'react';
import { useOnUpdateLeaderboardSubscription} from '../generated/graphql';

const LeaderboardAuto:FC = () => {
    const {data, loading} = useOnUpdateLeaderboardSubscription({
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
                <div>Leaderboard Subscription!</div>
                <div>{data?.onUpdateLeaderboard?.eventName ?? " No Name"}</div>
                {
                    data?.onUpdateLeaderboard?.rows?.map((currentRow) => {
                        return (
                            <div>{currentRow?.playerName}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default LeaderboardAuto;