import { FC} from "react";
import { LeaderboardRow } from "../generated/graphql";
import moment from "moment-timezone";

type LeaderboardRowViewProps = {
    row?: LeaderboardRow
}

const LeaderboardRowView:FC<LeaderboardRowViewProps> = ({row}) => {
    return (
        <div className="row">
            <div className="score">{row?.position}</div>    
            <div className="player">{row?.player?.lastName}</div>
            <div className="score">{row?.score == '-' ? moment.utc(row?.teeTime).tz("HST").format('h:mm a') : row?.score}</div>
            <div className="score">{row?.thru}</div>
            <div className="score">{row?.total}</div>
        </div>
    )
}

export default LeaderboardRowView;