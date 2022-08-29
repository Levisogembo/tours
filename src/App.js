import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import reap from './reap';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [reap, setReap]= useState(true);
  const [loading,setLoading] =useState(false);//setting default value to be true for the loading component
  const [tours, setTours]= useState([]);//setting the default value to an empty array

  const removeTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id);// setting an array only to return tours that match the id selected when not interested
    setTours(newTours); 
  }
  const fetchTours = async () =>{
    setLoading(true);
    try{
      const response = await fetch(url);// fetching the api url
      const tours = await  response.json();//parsing the api in json format
      setLoading(false);
      setTours(tours); 
    }catch (error){
      setLoading (false);
      console.log(error);
    }
  }
  useEffect (() =>{
    fetchTours (); 
  },[])
  if(loading){
    return(
      <main>
        <Loading/>
      </main> 
    );//this function displays the loading text when the tours are not loading and calls the loading component
  }
  if(tours.length ===0){
    return <main>
      <div>
        <h2>No tours left</h2>
        <button className='btn' onClick={fetchTours}>refresh</button>
      </div>
    </main>
  }
  return( 
   <main>
    <Tours tours={tours} removeTour= {removeTour} />
    <reap />
  </main>
  );
  if(loading){
  return (
  <main>
  <reap />
  </main>  
);}
}

export default App
