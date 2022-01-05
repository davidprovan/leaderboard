
import {FC,} from "react";
import { useUpdateLeaderboardMutation } from "../generated/graphql";


const UpdateLeaderboard:FC = () => {

    const [updateLeaderboard, {data }] = useUpdateLeaderboardMutation();

    return (
        <div className="button-update">
            <button onClick={(e) => {
                e.preventDefault();
                updateLeaderboard({
                    variables : {
                    leaderboardDataInput : {
                        id: "R2022016"
                    }
                }
            })}}>Click to Update the Leaderboard</button>
        </div>
    )

    return (
        <div>Update</div>
    )
}

export default UpdateLeaderboard;