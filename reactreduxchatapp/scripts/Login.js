var CommentBox = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
   handleChange: function(event) {
    this.setState({value: event.target.value.substr(0, 140)});
  }
  ,
  render: function() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
});
    
ReactDOM.render(
  <CommentBox />,
  document.getElementById('registration-form')
);
     flagoptions : [
     {name="Accountflagselected", target =[1,2], text="Account"}
     ],

     dbData: [
      {id: 0, author: "system", text: "Select the red Flags which apply"},
      {id: 1,  author: "user", text: <RadioButton  options={}/>},
      {id: 2, target: [4,5,6] , author: "user", text: "Profile/Account Red Flag"},
      {id: 3, target: [4,5,6] , author: "user", text: "Tranmsaction Red flag"},
      {id: 4, author: "system", text: "Select the red Flags which apply"},
      {id: 5, author: "system", text: "Thats cool...following is the data for 1st option"},
      {id: 6, author: "system", text: "Thats cool...following is the data for 2nd option"},
      {id: 7, author: "system", text: "choose 7 to get 9"},
      {id: 8, author: "user", text: "choose 8 to get 10"},
      {id: 9, author: "system", text: "Thats cool...following is the data for 7th option"}
      ] 