import React from 'react'
import CircleLoader from "react-spinners/CircleLoader";

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <CircleLoader
        color="rgba(71, 162, 162, 0.95)"
        cssOverride={{}}
        loading
        size={100}
        speedMultiplier={1}
    />
</div>
  )
}

export default Loading
