
import SearchBar from './scripts/Search_Bar';

const API_KEY ='AIzaSyA49FTl7Ik4eC-0V2UKDfz1WwMRQSMTvjg';

const App = function()
{
 return (
 	<div> <Search_Bar />  </div>
 	);
}

ReactDOM.render(<App />, document.getElementById('content'));