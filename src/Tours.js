import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return (
    
    <section>
      <div className='title'> 
      <h2>My current tours</h2>
      <div className='underline'></div>
      </div>
      <div>
      {tours.map((tours) =>{
        return <Tour key={tours.id} {...tours} removeTour={removeTour}></Tour>;
      })}
      </div>
    </section>
    
  );
};

export default Tours;
