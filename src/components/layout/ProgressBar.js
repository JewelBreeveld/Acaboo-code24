import React, {Component} from 'react'
import { Link } from "react-router-dom";
import './ProgressBar.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class ProgressBar extends Component {
  

  render() {
    const { location } = this.props
    console.log("LOCATION",location)
    return (
  <div className="progress-bar">

   {/* <div className="filler" style={{ width: `${props.progress}%` }}/> 
  </div> */}
  <ul>
  <li className = {location.pathname.indexOf('signup') > 0 ? "active" : ""}>1</li>
  <li>2</li>
  <li >3</li>
  <li>4</li>
  <li>5</li>
</ul>  
</div>
  )
    
}
}

const mapStateToProps = state => ({
  
})

export default withRouter(
  connect(mapStateToProps)(ProgressBar)
)