import './App.css';
import Header from './Header';
import Options from './Options';
import Showlist from './Showlist';
import {guideData} from './GuideData';
import React from 'react';

function App() {
  const [tomino, setTomino] = React.useState(false)
  const [filter, setFilter] = React.useState("")
  return (
    <div>
    	<Header></Header>
    	<Options tomino={tomino} setTomino={setTomino} setFilter={setFilter}></Options>
		  <Showlist tomino={tomino} data={guideData} filter={filter}></Showlist>
    </div>
  );
}

export default App;
