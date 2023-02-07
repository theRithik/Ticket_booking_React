import React from 'react';
import './events.css'
const Events=()=>{
    return(
         <>
         <div className='container'>
         <h1 className='hed'>Events</h1>
        
                <img className='img1' src='https://cdn0.weddingwire.in/vendor/9963/3_2/960/jpg/file-1654845571056_15_49963-165484557217179.jpeg' alt='events'/>
            
                <img className='img2' src='https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/gallery_promo_image/InVision_Shaklee_Global_Live.jpg?itok=huOoiSZJ' alt='events'/>
           <div className='row'>
            <div className='col-md-6'>
            <h3><span style={{color:'red'}}>Address: </span><em>NH 20 Service Rd,  benz circle, Vijayawada, Andhra Pradesh 520008</em></h3>
           
                  </div>
            <div className='col-md-6'>
                <h3><span style={{color:'red'}}>Address: </span><em>NH 16 Service Rd, NTR Colony, Veterinary Colony, Vijayawada, Andhra Pradesh 520008</em></h3>
            </div>
           </div>
         </div>
         
         </>
    )
} 
export default Events