
var ChatBox = React.createClass({

  getInitialState: function() {
    return {data: [
      {id: 1, author: "system", text: "Hi Alex!! How Are You!!"},
      {id: 2, author: "user", text: "Hellow i'm fine "},
      {id: 3, author: "user", text: "1st option "},
      {id: 4, author: "user", text: "2nd option "},
      
      ] ,
      dbData: [
      {id: 1, author: "system", text: "Hi Alex!! How Are You!!"},
      {id: 2, author: "user", text: "Hellow i'm fine "},
      {id: 3, author: "user", text: "1st option to get 5"},
      {id: 4, author: "user", text: "2nd option to get 6"},
      {id: 5, author: "system", text: "Thats cool...following is the data for 1st option"},
      {id: 6, author: "system", text: "Thats cool...following is the data for 2nd option"},
      {id: 7, author: "user", text: "choose 7 to get 9"},
      {id: 8, author: "user", text: "choose 8 to get 10"},
      {id: 9, author: "system", text: "Thats cool...following is the data for 7th option"},
      ] 
    };
  },


  render: function() {
    return (
     <div className = "chatBox" >
     <h1 className="colorbg">ChatApp</h1>
     <MessageList  data={this.state.data} dbData = {this.state.dbData}/>
     </div>
     );
  }
});


var MessageList = React.createClass({

  handleSubmit: function(e) {
   e.preventDefault();
   var allData= this.props.dbData


   console.log(allData)

   console.log(allData)
   console.log("heyadkb")
   if(this.props.dbkey =='2'){
    console.log("hey");

  }
},

render: function() {
  var messageNodes = this.props.data.map(function(message) {
    return (
      <Message   author={message.author} text={message.text} key={message.id}
      dbauthor={message.author} dbtext={message.text} dbkey={message.id}>
      {message.author}

      </Message>
      );


  });
  return (
    <div onClick={this.handleSubmit}  >
    {messageNodes}
    </div>
    );
}
});


var Message = React.createClass({




  render: function() {
    var styleVar = "";

    if (this.props.author == 'user') {
      styleVar = "rightSide" 
    } else { 
      styleVar = "leftSide" 
    }

    return (

     <a  className= "textDecor" >
     <div className={styleVar}  >
     <span className="textStyle" >
     {this.props.text}

     </span>

     </div> </a>
     );
  }
});

ReactDOM.render(
  <ChatBox  />,
  document.getElementById('content')
  );
