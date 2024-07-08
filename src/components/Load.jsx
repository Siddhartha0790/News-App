import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'

function Load(props) {
    const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
        <button onClick={() => setProgress(100)}>Complete</button>
       </div>
    )
  }
export default Load