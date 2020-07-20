import {RECIEVE_TWEETS,TOGGLE_TWEET,ADD_TWEET} from '../actions/tweets'

export  function  tweets (state={},action) {
  switch (action.type){
    case RECIEVE_TWEETS :
      return action.tweets
    case TOGGLE_TWEET :
      return {
      	...state,
      	[action.id] : {
      		...state[action.id],
      		likes : action.hasLiked === true ? 
      		state[action.id].likes.filter((i) => i !== action.authedUser) 
      		: state[action.id].likes.concat(action.authedUser)
      	}
      }
    case ADD_TWEET :
      let replyingToTweet ={}
      const {tweet} = action
      if(tweet.replyingTo !== null) {
      	replyingToTweet = {
      		[tweet.replyingTo] : {
      			...state[tweet.replyingTo],
      			replies:state[tweet.replyingTo].replies.concat(tweet.id) 
      		}
      	}
      }
      return {
      	...state,
      	[action.tweet.id]:action.tweet,
      	...replyingToTweet
      }
    default :
      return state
  }

}