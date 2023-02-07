import React from 'react';
import {Link} from 'react-router-dom'
import './section.css'
const Section =(props)=>{
  const renderView= ({movieData})=>{
    if(movieData){
      return movieData.map((item)=>{
          return (
            <div key={item.id} className="col-md-4" style={{display:'inline-block'}}>
            <div class="card" style={{width: '18rem', background:'transparent', border:'0.3px solid'}}>
            <img src={item.image} class="card-img-top cardimg" alt={item.title}/>
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.genre}</p>
              <Link to={`/details/${item.id}`} class="btn btn-danger" >Book</Link>
            </div>
          </div>
          </div>
          )
    
          })
        }
    }
        
    
return(
    <>
    {renderView(props)}
    </>
)
}
export default Section;