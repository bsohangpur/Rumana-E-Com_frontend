import React from 'react'
import {SyncLoader} from "react-spinners";

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <SyncLoader
        color="rgb(20 83 45)"
        cssOverride={{}}
        loading
        size={15}
        speedMultiplier={0.5}
    />
</div>
  )
}

export default Loading
