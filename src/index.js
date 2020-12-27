import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Helloworld(){
  return (<div>Hello world</div>);
}

function Tweet(){
  return (<div className="tweet">
    <Avatar/>
    

    <div className="handlerGroup">
      <NamewithHandler/> <Time/>
      <Message/>
      <div className="ButtonGroup">
        <ReplyButton/>
        <RetweetButton/>
        <LikeButton/>
        <MoreOptionButton/>
        
      </div>
    </div>

    
    
  </div>);
}

const Time=()=>(
  <span className="time">3h ago</span>
)

const ReplyButton= ()=>(
  <i className="fa fa-reply reply-button"/>
)

const RetweetButton= ()=>(
  <i className="fa fa-retweet retweet-button"/>
)

const LikeButton= ()=>{
 return  <i className="fa fa-heart like-button"/>
}

const MoreOptionButton = ()=>(
  <i className="fa fa-ellipsis-h option-button"/>
)

function Avatar(){
  return (<img src="https://www.gravatar.com/avatar/nothing" className="avatar" alt="avatar"/>)
}

function Message(){
  return (<p className="message">This is less than 140 characters!</p>);
}
function NamewithHandler(){
  return (<span className="handler"><span className="name">Your Name</span><span className="handle">@yourhandle</span></span>);
}



ReactDom.render(<Tweet/>,document.querySelector('#root'));