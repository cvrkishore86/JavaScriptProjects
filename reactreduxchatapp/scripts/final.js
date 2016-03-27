

const {createStore,combineReducers} = Redux;

 const dataarray = [
      {key: 0, author: "system", text: "Hi I will be your digital Assistant and will be helping you with reporting the fraud"},
       {key: 1, author: "system", text: "Can you please select one of area of the fraud"},
      {key: 2,  author: "user", type:"RadioButton" ,options:"accounts"}
      
      
      ] ;
 const radioOptionsJSON = {accounts:[
  {name:"Profileflagselected", target :[10,11], removetarget:[4,5,7,8] ,text:"Account", key:0},
  {name:"Profileflagselected", target :[7,8], removetarget:[4,5,10,11] ,text:"profile", key:1},
  {name:"Profileflagselected", target :[4,5], removetarget:[10,11,7,8] , text:"Transaction", key:2}
  ]
};     


const dbDataarray = [
      {key: 0, author: "system", text: "Hi I will be your digital Assistant and will be helping you with reporting the fraud"},
      {key: 1, author: "system", text: "Can you please select one of area of the fraud"},
      {key: 2,  author: "user", type:"RadioButton" ,options:"accounts"},
      {key: 3, target: [7,8] , author: "user", text: "Transaction Red flag"},
      {key: 4,  target : [10] , author: "system", text: "Select the red Flags which apply"},
      {key: 5, author: "system", text: "Thats cool...following is the data for 1st option"},
      {key: 6, author: "system", text: "How much would you like to invest " },
      {key: 7, author: "system", text: "Please provide account number"},
      {key: 8, author: "user", type:"input", name:"accountNumber"},
      {key: 9, author: "user",target: [10,11], text: "Thats cool..."},
      {key: 10, author: "system", text: "How much do you think is the affected amount"},
      {key: 11, author: "user", type:"input", name:"amount"}
      ];
  

//Reducers start here
var data = function(state = dataarray, action) {
  switch (action.type) {
    case 'SHOW_MESSAGE':
      return         messagePusher(action);
    case 'REMOVE_MESSAGE':
    return messageRemover(action);  

    default: 
    {
      
      return state
    }
  }
}
var messagematcher = function(key, value) {
  
  return value.key===key;
}

var messagefilter = function(keys, value) {
  
  return keys.indexOf(value.key) === -1;
}
const messagePusher = (action) => {
    
    
    var dataBase = store.getState().dbData;
    var messages = [];
    
    var target  = action.target;
    
    if (target != null) {
      for (var i = 0; i < target.length; i++)
      {
        var matching = store.getState().data.filter(messagematcher.bind(null, target[i]));
        if(matching.length == 0 )       
          messages.push(dataBase[target[i]]);

      }
     
      var newMessages =[...store.getState().data, ...messages]
      
      return newMessages;
    } {
       return [...store.getState().data];
    }

    
  }

const messageRemover = (action) => {
    
    
        
    var target  = action.target;
    
    
    if (target != null) {

        var newMessages = store.getState().data.filter(messagefilter.bind(null, target.target));
       
      
      return newMessages;
    } {
       return [...store.getState().data];
    }

    
  }



const bindFormValues = (action) => {
 var json = {};
    json[action.name] =action.value;
      var formchanged = Object.assign({}, store.getState().form, json);
        return formchanged;
}
//Reducers start here
var dbData = function(state = dbDataarray, action) {
  return state
  
}


var radioOptions = function(state = radioOptionsJSON, action) {
  return state
  
}

var form = function(state = {}, action) {
  switch (action.type) {
  case 'SAVE_FORM': 
  return bindFormValues(action);
     default: 
    {
      
      return state
    }
  }
}

const reducer = combineReducers({data, form, dbData,radioOptions});
const store = createStore(reducer);


const showMessage = (target) => {

  return {
    type: 'SHOW_MESSAGE',
    target
  }
}  
 

const removeMessage = (target) => {

  return {
    type: 'REMOVE_MESSAGE',
    target
  }
}  
 
    const saveform = (target) => {

  return {
    type: 'SAVE_FORM',
    name : target.name,
    value: target.value
  }
}  

var ChatBox = React.createClass({

  render: function() {
    console.log(store.getState().form)
    return (

     <div className = "chatBox">
     <h1 className="colorbg">Chat App</h1>
     <MessageList />

     </div>

     );
  }});


var MessageList = React.createClass({
  


   render: function() {
    
    var messageNodes = store.getState().data.map(function(message) {
      
      return (

        <Message key={message.key} onMessageHandler={(message)=> {store.dispatch(showMessage(message.target))}}  
         message ={message}>
        </Message>
        
        );
    }, this);

    return (
      <div>
      {messageNodes}
      </div>
      );
  }
});


var RadioButton = React.createClass({

  
  render : function() {
    
    
    const Buttonitem  = store.getState().radioOptions[this.props.options].map( (button) => {

      
      return(
        <RadioButtonList handler={this.props.handler} masterData={this.props.masterData} key={button.key}  name={button.name}
        target={button.target} removetarget={button.removetarget} text={button.text}
         > 
        </RadioButtonList>

        ); 
    });

    return (
      <span>
      {Buttonitem}
      </span>
      );

  }
});



var RadioButtonList = React.createClass({

 render:   function()
 {


  return (
    <label>
    <input type="radio"  name={this.props.name} target={this.props.target} 
    value={this.props.text} key={this.props.key} 
    onClick={this.onRadioButtonSelect}/>
    <img className ="imageStyle" src="./scripts/circle.png"></img>
    {this.props.text} 
    </label>
    );
},

onRadioButtonSelect: function(event)  {

  event.preventDefault();  
  var value = this.props.text;
  var target = this.props.target;
  this.props.handler({target : target});
  store.dispatch(saveform({
    name: this.props.name,
    value : this.props.text
  }))
store.dispatch(removeMessage({
    target: this.props.removetarget
   
  }))

}


});

var Message = React.createClass({
  messageHandleSubmit: function(e) {
   e.preventDefault();  
   var target = this.props.message.target;
   this.props.onMessageHandler({target : target});
 },
 messageRadioClick: function(e) {
   
   
   this.props.onMessageHandler({target : e.target});
 },
 render: function() {
  var styleVar = "";
  if (this.props.message.author == 'user') 
  {
    styleVar = "rightSide" 
  } else
  { 
    styleVar = "leftSide" 
  }
 
  if(this.props.message.target){
    return (
     <div className={styleVar} >

     <span className="textStyle" onClick={this.messageHandleSubmit} >
     {this.props.message.text}

     </span>
     </div>);
  }
   else if(this.props.message.type == "RadioButton")
   {
    
     return (
     <div className={styleVar} >
     <span className="imageStyle">
     
      <RadioButton handler={this.messageRadioClick} options={this.props.message.options} masterData={this.props.masterData} /> 
         
     </span>
     </div>);
   } else if (this.props.message.type == "input") {
    console.log(store.getState().form[this.props.message.name])
   return (
   <div className={styleVar} >
   <input type ="text" name={this.props.message.name} value={store.getState().form[this.props.message.name]} onChange={(event)=> {store.dispatch(saveform({name: event.target.name,value :event.target.value}))}}/>
     </div>);
   }
   else{
 return (
     <div className={styleVar} >
     <span className="textStyle">
     
      {this.props.message.text} 
         
     </span>
     </div>);
     
    
   }
  

}
});
const render = () => {
ReactDOM.render(
  <ChatBox  />,
  document.getElementById('content')
  );
  }

store.subscribe(render);
render();  






