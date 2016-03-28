
const {createStore,combineReducers} = Redux;



const dataarray = [
      {key: 0, author: "system", text: "Hi I will be your digital Assistant and will be helping you with reporting the fraud"},
       {key: 1, author: "system", text: "Can you please select one of area of the fraud"},
      {key: 2,  author: "user", type:"RadioButton" ,options:"accounts"}
      
      
      ] ;
 const radioOptionsJSON = {
  accounts:[
  {name:"Profileflagselected", target :[3], removetarget:3 ,text:"Authentication", key:0},
  {name:"Profileflagselected", target :[4], removetarget:3 ,text:"Profile/Account", key:1},
  {name:"Profileflagselected", target :[5], removetarget:3 ,text:"Transaction", key:2},
  {name:"Profileflagselected", target :[6,7], removetarget:3 , text:"Other", key:3}
  ],
  authenticationFlags:[
{name:"AuthenticationSelected", target :[8,9], removetarget:8 ,text: "authentication ", key:0},
{name:"AuthenticationSelected", target :[8,9], removetarget:8 ,text: "repeated question", key:1},
{name:"AuthenticationSelected", target :[8,9], removetarget:8 , text: "wrong password", key:2},
{name:"AuthenticationSelected", target :[8,9], removetarget:8 ,text: "suspicious voice", key:3},
  ],
   ProfileAccountFlags:[
{name:"ProfileAccountSelected", target :[8,9], removetarget:8 , text:"true person initate account?", key:0},
{name:"profileAccountSelected", target :[8,9], removetarget:8 ,text:"true person responding?", key:1},
{name:"profileAccountSelected", target :[8,9], removetarget:8 ,text:"large activity", key:2},
  ],
  TransactionFlags:[
{name:"TransactionSelected", target :[8,9], removetarget:8 ,text:"request to alternate address", key:0},
{name:"TransactionSelected", target :[8,9], removetarget:8 ,text:"request an ATM limit increase", key:1},
  ],
  Iniatator:[
{name:"IniatatorValue", target :[10,11,12], removetarget:10 ,text:"MSR", key:0},
{name:"IniatatorValue", target :[10,11,12], removetarget:10 ,text:"Member", key:1},
  ],
  CoSA:[
{name:"CoSAValue", target :[20], removetarget:20 ,text:"Bank", key:0},
{name:"CoSAValue", target :[21], removetarget:20 ,text:"Investment", key:1},
{name:"CoSAValue", target :[22], removetarget:20 ,text:"Life", key:2},
{name:"CoSAValue", target :[23], removetarget:20 ,text:"P&C", key:3},
  ],
  BankTypes:[
{name:"BankTypesValue", target :[24,25,26], removetarget:24,text:"Credit Card", key:0},
{name:"BankTypesValue", target :[24,25,26], removetarget:24 ,text:"Savings", key:1},
{name:"BankTypesValue", target :[24,25,26], removetarget:24 ,text:"Debit Card", key:2},
{name:"BankTypesValue", target :[24,25,26], removetarget:24 ,text:"Consumer Loan", key:3}
  ],
  InvestmentTypes:[
{name:"InvestmentTypesValue", target :[24,25,26], removetarget:24,text:"Brokerage", key:0},
{name:"InvestmentTypesValue", target :[24,25,26], removetarget:24 ,text:"Mutual Funds", key:1},
{name:"InvestmentTypesValue", target :[24,25,26], removetarget:24 ,text:"Wire", key:2}
  ],
  LifeTypes:[
  {name:"LifeValue", target :[24,25,26], removetarget:24,text:"Annuities", key:0},
  {name:"LifeValue", target :[24,25,26], removetarget:24 ,text:"Wire", key:1}
  ],
  PandCTypes:[
  {name:"LifeValue", target :[24,25,26], removetarget:24,text:"P&C Auto", key:0},
  {name:"LifeValue", target :[24,25,26], removetarget:24 ,text:"P&C Property", key:1}
  ],
  SuspiciousAvtivity:[
  {name:"SuspiciousAvtivityValue", target :[31,32,33], removetarget:31,text:"Account Take Over", key:0},
  {name:"SuspiciousAvtivityValue", target :[31,32,33], removetarget:31 ,text:"Scam", key:1},
    {name:"SuspiciousAvtivityValue", target :[31,32,33], removetarget:31 ,text:"SuspiciousMoneyMoment", key:2}
  ]

};     


const dbDataarray = [
      {key: 0, author: "system", text: "Hi I will be your digital Assistant and will be helping you with reporting the fraud"},
      {key: 1, author: "system", text: "Can you please select one of area of the fraud"},
      {key: 2,  author: "user", type:"RadioButton" ,options:"accounts"},
      {key: 3,  author: "user", type:"RadioButton" ,options:"authenticationFlags"},
      {key: 4,  author: "user", type:"RadioButton" ,options:"ProfileAccountFlags"},
      {key: 5,  author: "user", type:"RadioButton" ,options:"TransactionFlags"},
      {key: 6, author: "user", type:"input", name:"OtherRedFlag"},
      {key: 7, author: "user",target: [8,9], text: "OK!"},
      {key: 8, author: "system", text: "Thats ok... Please provide the required info about you!!"},

      {key: 9,  author: "user", type:"RadioButton" ,options:"Iniatator"},
      {key: 10, author: "system", text: "USAA Number"},
      {key: 11, author: "user", type:"input", name:"Member Number"},
      {key: 12, author: "user",target: [13,14,15], text: "OK!"},

      {key: 13, author: "system", text: "Member name"},
      {key: 14, author: "user", type:"input", name:"Member name"},
      {key: 15, author: "user",target: [16,17,18], text: "OK!"},

      {key: 16, author: "system", text: "Date of Occurance"},
      {key: 17, author: "user", type:"input", name:"FraudDate"},
      {key: 18, author: "user",target: [19], text: "OK!"},

      {key: 19,  author: "user", type:"RadioButton" ,options:"CoSA"},

      {key: 20,  author: "user", type:"RadioButton" ,options:"BankTypes"},
      {key: 21,  author: "user", type:"RadioButton" ,options:"InvestmentTypes"},
      {key: 22,  author: "user", type:"RadioButton" ,options:"LifeTypes"},
      {key: 23,  author: "user", type:"RadioButton" ,options:"PandCTypes"},

      
      {key: 24, author: "system", text: "Account Number Impacted"},
      {key: 25, author: "user", type:"input", name:"FraudAmount"},
      {key: 26, author: "user",target: [27,28,29], text: "OK!"},

      {key: 27, author: "system", text: "Fraud Amount Involved"},
      {key: 28, author: "user", type:"input", name:"ImpactedNumber"},
      {key: 29, author: "user",target: [30], text: "OK!"},

      {key: 30,  author: "user", type:"RadioButton" ,options:"SuspiciousAvtivity"},

       {key: 31, author: "system", text: "Caller ID Number"},
      {key: 32, author: "user", type:"input", name:"CallerIdNumber"},
      {key: 33, author: "user",target: [34,35,36], text: "OK!"},


       {key: 34, author: "system", text: "Online Documentation Number"},
      {key: 35, author: "user", type:"input", name:"DocumentNumber"},
      {key: 36, author: "user",target: [37,38,39], text: "OK!"},

       {key: 37, author: "system", text: "Comments"},
      {key: 38, author: "user", type:"input", name:"CommentValue"},
      {key: 39, author: "user",target: [40], text: "OK!"},


      {key: 40, author: "final", text: "We have received your request, we will get back to u soon"},
      

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

var messagefilter = function(key, value) {
  
  return key > value.key;
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
      <br/>
      {Buttonitem}
      <hr/>
      <br/>
      </span>
      );

  }
});



var RadioButtonList = React.createClass({

 render:   function()
 {


  return (
    <label className="container">
    <input type="radio"  name={this.props.name} target={this.props.target} 
    value={this.props.text} key={this.props.key} 
    onClick={this.onRadioButtonSelect}/>
    <img className ="imageStyle" src="./scripts/circle.png"></img>
    <div className="center"> {this.props.text} </div>
    </label>
    );
},

onRadioButtonSelect: function(event)  {

  event.preventDefault();  
  var value = this.props.text;
  var target = this.props.target;
  
  store.dispatch(saveform({
    name: this.props.name,
    value : this.props.text
  }))
store.dispatch(removeMessage({
    target: this.props.removetarget
   
  }))
this.props.handler({target : target});
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
  if(this.props.message.author == 'system')
  { 
    styleVar = "leftSide" 
  }
  else
  {
    styleVar = "centerText" 
  }
 
  if(this.props.message.target){
    return (
     <div className={styleVar} >

     <span className="textStyle cursorStyle" onClick={this.messageHandleSubmit} >
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


