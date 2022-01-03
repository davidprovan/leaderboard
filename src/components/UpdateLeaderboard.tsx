import { useMutation } from "@apollo/client";
import {FC,} from "react";
import { UpdateLeaderboardDocument } from "../generated/graphql";


const UpdateLeaderboard:FC = () => {

    const [updateLeaderboard, {data }] = useMutation(UpdateLeaderboardDocument);

    

    return (
        <div>
            To update the leaderboard click the button!
            <button onClick={(e) => {
                e.preventDefault();
                updateLeaderboard({
                    variables : {
                    leaderboardDataInput : {
                        id: "R101",
                        evenName: 'BUTTON PRESSED',
                        rows: [
                            {
                                playerName: "BP player name",
                                total: "103",
                                thru: "104",
                                today: "105",
                                movement: "200"
                            }
                        ]
                    }
                }
            })}}>Update</button>
        </div>
    )
}

export default UpdateLeaderboard;