class Checkbox extends React.Component{
	constructor(props)
	{
		super(props); 
		this.state = {count :0 };
		this.onCheckBoxInputChange = this.onCheckBoxInputChange.bind(this); 
	}

	render() {

		return (	
			<div>

			 <div>
			  <h4>CheckBox</h4>
			     <input className= "checkboxStyle" type="checkbox" 
			     onChange={this.onCheckBoxInputChange}/>
			      <input className= "checkboxStyle" type="checkbox" 
			     onChange={this.onCheckBoxInputChange}/>
			     
			   <div>
			    Selected= {this.state.count}/2
			   </div>

			  </div>

			</div>
			);
	}

	
	onCheckBoxInputChange(event){
		if( event.target.checked == true) {
			this.setState({count : this.state.count+1}); }
			else if( event.target.checked == false ) 
				{this.setState({count : this.state.count -1})}
		}
}

ReactDOM.render(<Checkbox />, document.getElementById('myCheckBox'));