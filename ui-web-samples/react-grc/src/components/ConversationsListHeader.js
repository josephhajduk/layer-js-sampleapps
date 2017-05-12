/**
 * This Component provides a title over the conversation list
 * and a button for creating a new Conversation.
 */
import React, { Component } from 'react';

export default class ConversationListHeader extends Component {
  /**
   * Show the Participants Dialog
   */
  handleShowParticipants = (event) => {
    event.preventDefault();
    this.props.onShowParticipants();
  }

  /**
   * Show the Announcements Dialog
   */
  showAnnouncements = (event) => {
    event.preventDefault();
    this.props.onShowAnnouncements();
  }

  render() {
    const { unreadAnnouncements, user } = this.props;
    const announcementClasses = ['announcements-button'];
    if (unreadAnnouncements) announcementClasses.push('unread-announcements');
    return (
      <div className='panel-header conversations-header'>
        <div className='title'>Active Patient Conversations</div>
        <a className={announcementClasses.join(' ')} onClick={this.showAnnouncements}>
          <i className="icon fa fa-bullhorn"></i>
        </a>
        <a href='#' onClick={this.handleShowParticipants}>
          <i className="icon fa fa-pencil-square-o"></i>
        </a>
      </div>
    );
  }
}
