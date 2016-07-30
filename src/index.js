import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

//API key for youtube API
const API_KEY = 'AIzaSyBZiGw2LGwagDKmcE4Zpwv91M0Dr0CuVD8';


//create a component
const App = function(){
  return (
     <div>
       <SearchBar />
     </div>
   );
}

//Mount it to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
