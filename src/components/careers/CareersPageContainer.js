import React from 'react'
import {connect} from 'react-redux'
import Mission from './Mission'

class CareersPageContainer extends React.Component {
  componentDidMount() {
  // something
  }

  render() {
    return (
      <div className = "hiring-page">
      <h3>Join the team</h3>
      <h1>We are Acaboo. Help shape the future of education.</h1>
        <Mission/>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  // something
})

export default connect(mapStateToProps)(CareersPageContainer)