var CommentBox = React.createClass({
  
  getInitialState: function() {
    return {data: [
      {id: 1, author: "USAA", text: "This is one comment"}
  ]};
  },

   handleCommentSubmit: function(comment) {
     
      this.state.data.push(comment);
      this.setState({data: this.state.data});
  },

  render: function() {
    return (
      <div >
        <h1>System</h1>
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
        <Comment author={eachComment.author} key={eachComment.id}>
          {eachComment.text}
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
      <div >
        <h2 >
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />

        
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

class Checkbox extends React.Component{
    constructor(props)
    {
      super(props); 
      this.state = {count :0 };
      this.onInputChange = this.onInputChange.bind(this); 
    }

    render() {

      return (<div className= "rightSide">
            <input type="checkbox" onChange={this.onInputChange}/> hellow USAA
                            <p>1</p>
            <input type="checkbox" onChange={this.onInputChange}/> Check2 
                            <p>2</p>
            

            <div >
              Completed= {this.state.count}/2
            </div>

             </div>
        );
        }

    onInputChange(event){
      if( event.target.checked == true) {
      this.setState({count : this.state.count+1}); }
      else if( event.target.checked == false ) {this.setState({count : this.state.count -1})}
         }
    }

ReactDOM.render(<Checkbox />, document.getElementById('demo'));


ReactDOM.render(
  <CommentBox  />,
  document.getElementById('content')
);