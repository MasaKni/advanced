import logo from './logo.svg';
import './App.css';
import NavigationBar from './navigationBar.js';
import { Bar } from 'react-chartjs-2';
import Players from './players.js';
import Filters from './filters.js';

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className='contents'>
        <Filters />
        <Players />
      </div>
      <div className="numbers">
          <button className="number">1</button>
          <button className="number">2</button>
          <button className="number">3</button>

      </div>
      


    </div>
  );
}
