import React, { useState } from 'react';

const Tour = ({id,image,info,price,name, removeTour}) => {
  const [loading, setLoading] = useState(false);
  const [readMore,setReadMore]= useState(false);//setting a state value to help user select whether to see more or less information on tours
  return (
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4> 
        </div>   
        <p>
          {readMore ? info:`${info.substring(0,200)}.....`}
        </p>
        <button onClick={()=>setReadMore(!readMore)}> {readMore ? 'show less': 'Read more'}</button>
        <button className='delete-btn' onClick={()=> removeTour(id)}>Not interested</button>
      </footer>

    </article>
  );
};

export default Tour;
