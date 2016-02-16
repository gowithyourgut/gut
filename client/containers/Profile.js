import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Actions
import * as authActions from './../actions/authActions';
import * as dinerActions from './../actions/dinerActions';
import * as pollActions from './../actions/pollActions';
import * as viewActions from './../actions/viewActions';
import * as friendActions from './../actions/friendActions';

//Components
import Navigation from './../components/Navigation';
import ProfileHome from './../components/ProfileHome';
import Poll from './../components/Poll';

class Profile extends React.Component {
  constructor(){
    super();
    this.displayProfile = this.displayProfile.bind(this);
  }

  componentWillMount(){
    const { authenticateUser } = this.props.authActions;

    authenticateUser(localStorage.token);
  }

  displayProfile(){
    if(this.props.showPoll && this.props.isSubmitting){
      return(
        <Poll {...this.props} />
      )
    } else {
      return (
        <ProfileHome {...this.props} />
      )
    }
  }

  render(){
    return(
      <div>
        <Navigation {...this.props} />
        <div className='container margin-bottom'>
          {this.displayProfile()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //auth state
    username: state.authReducer.username,
    categories: state.authReducer.categories,
    isLoggedIn: state.authReducer.isLoggedIn,
    isFetching: state.authReducer.isFetching,
    authErrorMsg: state.authReducer.authErrorMsg,
    showPoll: state.authReducer.showPoll,

    //poll state
    isSubmitting: state.pollReducer.isSubmitting,
    selected: state.pollReducer.selected,
    unselected: state.pollReducer.unselected,
    topCategories: state.pollReducer.topCategories,
    pollErrorMessage: state.pollReducer.pollErrorMessage,
    data: state.pollReducer.data,
    isFetchingYelp: state.pollReducer.isFetchingYelp,
    wasReset: state.pollReducer.wasReset,

    //diner state
    diners: state.dinerReducer.diners,
    location: state.dinerReducer.location,
    recommendations: state.dinerReducer.recommendations,
    beenTo: state.dinerReducer.beenTo,
    topRestaurant: state.dinerReducer.topRestaurant,
    index: state.dinerReducer.index,
    isLoadingResults: state.dinerReducer.isLoadingResults,
    isAddingHistory: state.dinerReducer.isAddingHistory,
    uberData: state.dinerReducer.uberData,
    isLoadingUberData: state.dinerReducer.isLoadingUberData,
    pickupLocation: state.dinerReducer.pickupLocation,
    avatarUrl: state.dinerReducer.avatarUrl,

    //view state
    displayFriendsChoice: state.viewReducer.displayFriendsChoice,
    displayLocationChoice: state.viewReducer.displayLocationChoice,
    displayResults: state.viewReducer.displayResults,
    displayAddFriends: state.viewReducer.displayAddFriends,
    displayUberInfo: state.viewReducer.displayUberInfo,
    displayPreferences: state.viewReducer.displayPreferences,
    displayHistory: state.viewReducer.displayHistory,
    displayProfileHome: state.viewReducer.displayProfileHome,

    //friend state
    userFriends: state.friendReducer.userFriends,
    friendSearchQuery: state.friendReducer.friendSearchQuery,
    searchResults: state.friendReducer.searchResults,
    friendsErrorMsg: state.friendReducer.friendsErrorMsg,
    isSearching: state.friendReducer.isSearching,
    addCheck: state.friendReducer.addCheck,
    removeCheck: state.friendReducer.removeCheck,
    isLoadingFriends: state.friendReducer.isLoadingFriends
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    dinerActions: bindActionCreators(dinerActions, dispatch),
    pollActions: bindActionCreators(pollActions, dispatch),
    viewActions: bindActionCreators(viewActions, dispatch),
    friendActions: bindActionCreators(friendActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
