import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './booking.css'
const url=""
const Booking =(props)=>{
    const [seat, setSeat]=useState()
    const [num, setNum]=useState(1)
    const [time, setTime]=useState()
    const [date, setDate]=useState()
    const [totalrs, setTotalrs]= useState()
    
    const incValue=()=>{
        if(num>0){
        setNum(Number(num)+1);
        }
     }

     const decValue=()=>{
        if(num<100){
            setNum((num)-1)
        }
     }
   const  handleChange=(e)=>{    
   setNum(e.target.value)
}
const dateClick=(e)=>{
setDate(e.target.value)
}
const timeClick=(e)=>{
    setTime(e.target.value)
    }
    const seatPrice=(e)=>{
   setSeat(e.target.value)
    }

   const total=()=>{
    return num*seat
    
     console.log()
      // console.log(totalPrice)
     
  }
  

    return(
        <><br/>
        <div className='container' style={{textAlign:'center'}}>
            <h3 style={{color:"grey"}}> Select Date</h3>
        <h3><input type="date" style={{background:'danger', color:'grey'}} onChange={dateClick}/></h3><br/>
       <div className='row'>
        <h3 style={{color:"grey", marginBottom:'20px'}}>Available Show Timings</h3>
       
        <input type='button' className='col-md-3  btn btn-danger' data-bs-toggle="button" value="10pm" onClick={timeClick}/>
        <input type='button' className='col-md-3 click btn btn-danger' data-bs-toggle="button" value="2pm" onClick={timeClick} />
        <input type='button' className='col-md-3 click btn btn-danger' data-bs-toggle="button" value="6pm" onClick={timeClick}/>
         </div> <br/><br/>

          <div className='row'>
            <div className='col-md-4'>
              <h4>Normal 🪑</h4>
              <input type="button" value="200" className='btn btn-warning' data-bs-toggle="button" onClick={seatPrice}/>
            </div>
           
            <div className='col-md-4'>
            <h4>Superior 💺</h4>
              <input type="button" value="300" className='btn btn-warning' data-bs-toggle="button"  onClick={seatPrice} />
            </div>
            
            <div className='col-md-4'>
            <h4>Sofa 🛋️</h4>
              <input type="button" value="600" className='btn btn-warning' data-bs-toggle="button"  onClick={seatPrice}/>
            </div>
          </div>




        <h3 style={{color:"grey",marginTop:'5%', paddingBottom:'20px'}}>Number of Tickets</h3>
        <div className="col-xl-1" style={{ marginLeft:'45%',marginBottom:'60px' }}>
    <div class="input-group">
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary" type="button" onClick={incValue} >+</button>
  </div>
  <input type="text" class="form-control" value={num} onChange={handleChange} onClick={total} style={{paddingLeft:'3px', paddingRight:'0'}}/>
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary" type="button" onClick={decValue} >-</button>
  </div>
</div>
</div>
<div className='row'>
    <Link to={{pathname:`/TicketBooked/${props.match.params.topic}`,state:{nticket:{num},time:{time},date:{date}, seat:{seat}, total:{totalrs}}}}  className='btn btn-danger' >Book</Link>
</div>
</div>
       {/* <div className='row'>
        <div className='col-md-4'>
        <span className='btn btn-danger plus' onClick={handleClick}>  </span>
        <p></p>
        <span className='btn btn-danger plus'></span>
       </div>
       </div> */}
        
        
        
        </>
    )
}
export default Booking