import React from 'react'
import Tweet from './Tweet.js'
import NewTweet from './NewTweet'
import {connect} from 'react-redux'

class TweetPage extends React.Component {
	
	render(){
		const {replies , id} = this.props
	console.log(this.props)
		return(
            <div>
              <Tweet id={id}/> 
              <NewTweet id={id}/> 
              {replies.length !== 0 && (<h3 className='center'>Replies</h3>)}
              <ul>
               {replies.map((reply)=>(<li key={reply}><Tweet id={reply}/></li>))}
              </ul>
            </div>
			)
	}
}
function mapStateToProps({users,tweets,authedUser},props){
   const {id} = props.match.params
   return {
   	id,
   	replies : !tweets[id] ? [] : tweets[id].replies.sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
   }
}
export default connect(mapStateToProps)(TweetPage)