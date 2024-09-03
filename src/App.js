import React,  {useState} from 'react';
import data from './data.js'
import Tours from './components/Tours.js';
import './App.css';

function App() {

  const [tours, setTours] = useState(data)

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length ===0)
  {
    return (
      <div className='flex items-center justify-center flex-col h-[100vh]'>
        <h2>No tours left</h2>
        <button onClick={() => setTours(data)} className='mt-18px py-[10px] px-[80px] border-solid border-[1px] border-white cursor-pointer bg-[#cebebe]'>
          Refresh
          </button>
      </div>
    );
  }

  return (
    <div className='App'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
