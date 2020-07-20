import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handelInitialData} from '../actions/shared'
import DashBoard from './DashBoard'
import LoadingBar from 'react-redux-loading'
import NewTweet  from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import  {  Fragment } from 'react'

class App extends Component {
	componentDidMount(){
       this.props.dispatch(handelInitialData())
	}
  render() {
    return (
      <Router>
       <Fragment>
        <LoadingBar/>
        <div className='container'>
          <Nav/>
          {this.props.loading === true ? null :  
           <div>
            <Route path='/' exact component={DashBoard}/>
            <Route path='/new' component={NewTweet}/>
            <Route path='/tweet/:id' component={TweetPage}/>
           </div>
           } 
        </div>      
       </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}){
   return {loading : authedUser === null}
}

export default connect(mapStateToProps)(App)