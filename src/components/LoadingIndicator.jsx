import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker';
import { PacmanLoader } from 'react-spinners'

export const LoadingIndicator = props => {
    const {promiseInProgress} = usePromiseTracker();
    return(
        <div>
            {promiseInProgress &&
                <div className="spinner">
                    <PacmanLoader color={"#D7AC36"} size="25px"/>
                </div>
            }
        </div>
    )
}
