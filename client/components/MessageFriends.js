import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

class MessageFriends extends React.Component {
  constructor(){
    super();
    this.triggerSendMessage = this.triggerSendMessage.bind(this);
    this.friendsString = this.friendsString.bind(this);
    this.concatFriends = this.concatFriends.bind(this);
  }

  friendsString(){
    const { diners } = this.props;
    if(diners.length > 1){
      return this.concatFriends();
    }
    else {
      return diners[0];
    }
  }

  concatFriends(){
    const { diners } = this.props;
    //console.log('diners in concatFriends: ', diners)
    let str = diners[0];
    for(let i=1 ; i<diners.length ; i++){
      if(i === diners.length-1){
        str += ' & ' + diners[i].friendName;
      }
      else {
        str += ', ' + diners[i].friendName;
      }
    }
    return str;
  }

  triggerSendMessage(e){
    e.preventDefault();
    const { sendMessage } = this.props.friendActions;
    const { diners } = this.props;
    const { mobile_url } = this.props.topRestaurant;
    const message = this.refs.message;

    diners.shift();
    console.log('diners to message in MessageFriends: ', diners);

    const messageObj = {
      message: message.value + '/n' + mobile_url,
      sendTo: diners,
    };
    sendMessage(messageObj);
  }

  render(){
    return(
      <Modal
        show={this.props.showMessageModal}
        onHide={this.props.closeMessageModal}
        className='loginmodal signin' >
        <Modal.Header closeButton className='close-btn'>
        </Modal.Header>
        <Modal.Body className='modalbody'>
          <p className='toggle'>Send a message to {this.friendsString()}:</p>
          <form>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Hey Peap! Lets meet up!'
                ref='message'/>
              <button
                type='submit'
                className='btn btn-block submit'
                onClick={this.triggerSendMessage}>
                Send
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
}


export default MessageFriends;
