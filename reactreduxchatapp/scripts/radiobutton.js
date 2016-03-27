class RadioButton extends React.Component{
	constructor(props)
	{
		super(props); 
		this.state = {index :false };
		this.onRadioButtonInputChange = this.onRadioButtonInputChange.bind(this); 
	}

	render() {

		return (	
			<div id="rates">
			  <h4>RadioButton</h4>

			   <label >
			       <input type="radio" name="fb" value="small" 
			         onChange={this.onRadioButtonInputChange}/>
			       <img className ="imageStyle" src="./scripts/circle.png">
			       <span className="imageSpanStyle">Accounts</span>
			       </img>

			  </label>
			  <label>
			       <input  type="radio" name="fb" value="big" 
			       onChange={this.onRadioButtonInputChange} />
			       <img className ="imageStyle" src="./scripts/circle.png"></img>
			  </label>


			   <div>
			    Selected= {this.state.index}
			   </div>

			 </div>
			);
	}

	onRadioButtonInputChange(event){
		this.setState({index : event.target.value})
		}

	
}

ReactDOM.render(<RadioButton />, document.getElementById('myRadioButton'));



