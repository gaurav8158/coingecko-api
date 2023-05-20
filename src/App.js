import React,{ useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Table from './Component/Table';

function App() {
const[data,setData] = useState([]);


useEffect(() => {
  // Data fetching logic here
  fetchData();
}, []);

const fetchData = async () => {
  // Perform data fetching here
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    const data = response.data;
    setData(data);
    // Handle the fetched data
  } catch (error) {
    // Handle errors
    console.log("error");
  }
};

  return (
    <div className="App">
     <Table
     array={data}
     />
    </div>
  );
}

export default App;
