import { FC} from "react";
import { LeaderboardRow } from "../generated/graphql";

type LeaderboardRowViewProps = {
    row?: LeaderboardRow
}

const LeaderboardRowView:FC<LeaderboardRowViewProps> = ({row}) => {
    return (
        <div className="row">
            <div className="score">{row?.position}</div>    
            <div className="player">{row?.player?.displayName}</div>
            <div className="score">{row?.score}</div>
            <div className="score">{row?.thru}</div>
            <div className="score">{row?.total}</div>
        </div>
    )
}

export default LeaderboardRowView;