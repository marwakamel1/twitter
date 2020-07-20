import React from 'react'
import {connect} from 'react-redux'
import Tweet from './Tweet'
class DashBoard extends React.Component {
	render(){
		console.log(this.props)
		return(
            <div>
              <h3 className='center'>Your Timeline</h3>
              <ul className='dashboard-list'>
               { this.props.tweetsID.map((id)=>(
               	<li key={id}>
                 <Tweet id={id}/>
                </li>
                ))
            }
              </ul>
            </div>
			)
	}
}

function mapStateToProps({tweets}){
 console.log({tweets})
 return { tweetsID : Object.keys(tweets).sort((a,b)=>tweets[b].timestamp - tweets[a].timestamp) }
}
export default connect(mapStateToProps)(DashBoard)