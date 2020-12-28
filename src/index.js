import React from 'react';
import ReactDom from 'react-dom';
import Moment from 'moment';
import './index.css';
import PropTypes from 'prop-types';

function Helloworld(){
  return (<div>Hello world</div>);
}

function Tweet({tweet}){
  return (<div className="tweet">
    <Avatar hash={tweet.gravatar}/>
    

    <div className="handlerGroup">
      <NamewithHandler author={tweet.author}/> <Time time={tweet.timestamp}/>
      <Message message={tweet.message}/>
      <div className="ButtonGroup">
        <ReplyButton/>
        <RetweetButton count={tweet.retweets}/>
        <LikeButton count={tweet.likes}/>
        <MoreOptionButton/>
        
      </div>
    </div>

    
    
  </div>);
}

var testtweet={
  message:'say something about dancing party',
  gravatar:"xyz",
  author:{
    handle:"carpusor",
    name:'Merry Brown'
  },
  likes:5,
  retweets:4,
  timestamp: "2016-07-30 21:24:37"
};

// console.log(typeof testtweet);

function getCountNumber(count){
  if(count>0){
    return (
      count
    );
  }else{
    return null;
  }
}

const Time=({time})=>(
  <span className="time">{Moment(time).fromNow()}</span>
)

const ReplyButton= ()=>(
  <i className="fa fa-reply reply-button"/>
)

const RetweetButton= ({count})=>(
 <span className="retweet-button"> <sub>{getCountNumber(count)}</sub><i className="fa fa-retweet "/></span>
)

const LikeButton= ({count})=>{
 return  <span  className="like-button"> <sub>{count ? count : null }</sub><i className="fa fa-heart "/></span>
}

const MoreOptionButton = ()=>(
  <i className="fa fa-ellipsis-h option-button"/>
)

function Avatar({hash}){
  let url=`https://www.gravatar.com/avatar/${hash}`;
  return (<img src={url} className="avatar" alt="avatar"/>)
}

function Message({message}){
  return (<p className="message">{message}</p>);
}
function NamewithHandler({author}){
  return (<span className="handler"><span className="name">{author.name}</span><span className="handle">@{author.handle}</span></span>);
}


LikeButton.propTypes={
  count:PropTypes.number
};

NamewithHandler.propTypes={
  author:PropTypes.shape({
    handle:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
  }).isRequired
}

Tweet.propTypes={
  tweet:PropTypes.object.isRequired
};


ReactDom.render(<Tweet tweet={testtweet} />,document.querySelector('#root'));