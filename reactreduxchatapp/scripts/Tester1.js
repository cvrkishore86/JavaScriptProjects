var CommentBox = React.createClass({
  
  getInitialState: function() {
    return {systemData: [
      {id: 1, author: "Hi Peter here"}

  ],
       userData: [{id: 1, author: "Hello Peter, how r u?"}]};

  },

   handleCommentSubmit: function(comment) {
      this.state.userData.push(comment);
      this.setState({userData: this.state.userData});
  },

  handleUserCommentSubmit:function() {

  },

  render: function() {
    return (
      <div className = "chatBox" >
        <h1 className="colorbg">ChatApp</h1>
        <SystemList systemData={this.state.systemData} />
        <UserList method={this.handleUserCommentSubmit} userData={this.state.userData} />
       <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>

    


    );
  }
});

var UserList = React.createClass({
render: function(){
var commentNodes = this.props.userData.map(function(eachComment) {
      return (
        <UserComment  author={eachComment.author} key={eachComment.id}>
        </UserComment>
      );
    });
    return (
      <div >
        {commentNodes}
      </div>
    );


}
});

var UserComment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  handleClick: function(e) {
     
},
  render: function() {
    return (
      <div className="messageStyleRight">
        <span className="authorStyleRight" onClick={this.handleClick}>
          {this.props.author}
        </span> 
       
      </div>
    );
  }
});

var SystemList = React.createClass({
  render: function() {
    var commentNodes = this.props.systemData.map(function(eachComment) {
      return (
        <Comment author={eachComment.author} key={eachComment.id}>
          
        </Comment>
      );
    });
    return (
      <div >
        {commentNodes}
      </div>
    );
  }
});


var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      <div className="messageStyle">
        <span className="authorStyle" >
          {this.props.author}
        </span> 
       
      </div>
    );
  }
});

var CommentForm = React.createClass({
  getInitialState: function() {
       return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
     <form  className= "rightSide" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange} />
     
       <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange} />


        <input type="submit"  />


      </form>


    );
  }
});





ReactDOM.render(
  <CommentBox  />,
  document.getElementById('content')
);