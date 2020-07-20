import React from 'react'
import {connect} from 'react-redux'
import {handelAddTweet} from '../actions/tweets'
import {Redirect} from 'react-router-dom'
class NewTweet extends React.Component {
	state ={
		text :'',
		isHome : false
	}
    handelChange = (e) => {
       const text = e.target.value
       this.setState(()=>({text}))
    }

	handelSubmit = (e) =>{
		e.preventDefault()
		const {text} = this.state
		const {dispatch,id} = this.props
		console.log(text)
		dispatch(handelAddTweet(text,id))
		this.setState(()=>({text:'',isHome:id ?false:true}))
	}

	render(){
		const {text,isHome} = this.state
		const textLeft = 280-text.length
		    if (isHome === true) {
        return <Redirect to='/' />
          }
		return(
		<div>	
			<h3 className='center'>New Tweet</h3>
			<form className='new-tweet' onSubmit = {this.handelSubmit}>
			  <textarea 
                placeholder="What's happening"
                value={text}
                maxLength={280}
                onChange={this.handelChange}
                className='textarea'
			  />
			  {textLeft  <= 100 && (
			  	<div className='tweet-length'>
                   {textLeft}
			  	</div>)}
			 <button
              className='btn'
              type='submit'
              disabled={text === ''}
			 >
			  Submit
			 </button>
			</form>
		</div>	
			)
	}
}

export default connect ()(NewTweet)