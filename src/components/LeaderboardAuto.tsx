import {FC} from 'react';
import { useOnUpdateLeaderboardSubscription} from '../generated/graphql';
import LeaderboardRowView from "./LeaderboardRow";

const LeaderboardAuto:FC = () => {
    const {data, loading} = useOnUpdateLeaderboardSubscription({
        variables: {
            id: "R2022016"
        }
    });
 

    if(loading){
        return (
            <div>Leaderboard loading</div>
        )
    }else{
        return (
            <div>
                <h3>{data?.onUpdateLeaderboard?.eventId ?? " No Name"}</h3>
                <div className="leader-board">
                    <div className="row header">
                        <div className="score">Pos</div>    
                        <div className="player">Player</div>
                        <div className="score">Today</div>
                        <div className="score">Thru</div>
                        <div className="score">Total</div>
                    </div>
                    {
                        data?.onUpdateLeaderboard?.players?.map((currentRow) => {
                            if(currentRow){
                                return (
                                    <LeaderboardRowView row={currentRow} />
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

export default LeaderboardAuto;