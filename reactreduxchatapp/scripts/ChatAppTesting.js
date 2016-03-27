
var CommentBox = React.createClass({

  getInitialState: function() {
    return {data: [
      {id: 1, author: "system", text: "Hi Alex!! How Are You!!"},
      {id: 2, author: "user", text: "Hellow i'm fine, "},
      {id: 3, author: "user", text: "selct the option, "},
      {id: 4, author: "user", text: "1, "},
      {id: 5, author: "user", text: "2, "},
      {id: 6, author: "system", text: "Thats cool...following is the data for 2"},
      ]};
    },

    handleCommentSubmit: function(comment) {
      this.state.data.push(comment);
      this.setState({data: this.state.data});
    },

    render: function() {
      return (
        <div className = "chatBox" >
        <h1 className="colorbg">ChatApp</h1>
        <CommentList data={this.state.data} />


        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </div>
        );
    }
  });


var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(eachComment) {
      return (
        <Comment author={eachComment.author} text={eachComment.text} key={eachComment.id}>
        {eachComment.author}
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

    render: function() {
      var styleVar = "";
      if (this.props.author == 'user') {
        styleVar = "rightSide"
      } 
      return (

      <div className={styleVar}>
      <span className="authorStyle">
      {this.props.text}
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

      console.log(this.state.data);

      this.props.onCommentSubmit({author: author, text: text});
      this.setState({author: '', text: ''});
    },
    render: function() {
      return (
      <form  className= "rightSide" onSubmit={this.handleSubmit}>
      <input
      type="text"
      placeholder="System/user"
      value={this.state.author}
      onChange={this.handleAuthorChange} />

      <input
      type="text"
      placeholder="Message"
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

