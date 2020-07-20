import {getInitialData}from  '../utils/api'
import {recieveTweets} from  './tweets'
import {recieveUsers}  from  './users'
import {setUser}       from  './authedUser'
import {showLoading,hideLoading} from 'react-redux-loading'
const userID = 'sarah_edo' 

export function handelInitialData (){
  
  return (dispatch) => {
  	dispatch(showLoading())
    return getInitialData()
      .then(({users, tweets}) => {
         dispatch(recieveTweets(tweets))
         dispatch(recieveUsers(users))
         dispatch(setUser(userID))
         dispatch(hideLoading())
      })
}
}
