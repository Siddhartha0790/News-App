
import { Link } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'

function navbar() {
  const [progress, setProgress] = useState(0)
    return (
      <> <LoadingBar loaderSpeed={2000}  waitingTime ={2000} color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <h1 className="navbar-brand" >News Headlines</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" onClick={() => setProgress(100)}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health"  onClick={() => setProgress(100)}>Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports"  onClick={() => setProgress(100)}>Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment" onClick={() => setProgress(100)}>Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology" onClick={() => setProgress(100)}>Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business" onClick={() => setProgress(100)}>Business</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      </div></>
     
    )
  
}
export default navbar
