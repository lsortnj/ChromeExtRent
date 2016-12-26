import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchComments} from '../../actions/itemDashboard/action-comments'

class CommentList extends Component {
  renderList() {
    if(!this.props.comments) return (
      <h4> NO Comment Now</h4>
    );

    return this.props.comments.map((comment) => {
      return (
        <div>
          <h4>{comment.author}</h4>
          <h5>{comment.content}</h5>
        </div>
      );
    });
  }
  
  render() {
    if(!this.props.comments){
      return (<div> No Comment List Data! </div>);
    }

    return (
        <div className="comment-list">
          <input onClick = {() => this.props.fetchComments} />
          <h4>Comment-List</h4>
          {this.renderList()}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // comments: state.comments
    comments: state.testData
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchComments: fetchComments}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CommentList);
