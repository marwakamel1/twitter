import {saveLikeToggle,saveTweet} from '../utils/api'
import {showLoading,hideLoading} from 'react-redux-loading'

export  const TOGGLE_TWEET   = 'TOGGLE_TWEET'
export const RECIEVE_TWEETS = 'RECIEVE_TWEETS'
export const ADD_TWEET ='ADD_TWEET'


export function recieveTweets(tweets) {
  return {
  	type : RECIEVE_TWEETS,
  	tweets
  }

}

export function addTweet(tweet){
	return {
		type:ADD_TWEET,
		tweet
	}
}

function toggleTweet({id,authedUser,hasLiked}){
	return{
		type:TOGGLE_TWEET,
		id,
		authedUser,
		hasLiked
	}
}

export function handelAddTweet(text,replyingTo){
	return (dispatch,getstate) =>{
		const {authedUser} = getstate()
		console.log(authedUser)
		dispatch(showLoading())
		return saveTweet({
			text,
			author : authedUser,
			replyingTo
		})
		 .then ((tweet)=> {dispatch(addTweet(tweet))})
		 .then (()=>{dispatch(hideLoading())})

	}
}
export function handleToggleTweet (info){
  return(dispatch) => {
  	dispatch(toggleTweet(info))
  	return saveLikeToggle(info)
  	        .catch((e)=>{
             console.warn('Error in handleToggleTweet: ', e);
             alert('There was an error liking the tweet. Try again.');
             dispatch(toggleTweet(info))
  	        })
  }
}