import {FC} from 'react';
import { useGetTeeTimesQuery} from '../generated/graphql';

const TeeTimes:FC = () => {
    const {data, loading} = useGetTeeTimesQuery({
        variables: {
            id: "R2022016"
        }
    }); 

    if(loading){
        return (
            <div>TeeTimes loading</div>
        )
    }else{
        return (
            <div>
                <div>TeeTimes</div>
                <div>CurrentRound = {data?.teeTimes?.defaultRound}</div>
            </div>
        )
    }
}

export default TeeTimes;