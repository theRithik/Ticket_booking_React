import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import JSON from '../frontpage/db.json'
import './detail.css'


class Details extends Component{
    constructor(props){
        super(props)
        this.state={
            filterData:JSON,
            params:props.match.params.topic
            
        }
    }   
    renderFilter=()=>{
    const newData= this.state.filterData.filter((data)=>{
                return  data.id==this.state.params
                    })

                    if(newData){
                   
                        return newData.map((item)=>{
                            return(
                                <div key={item.id} >
                                    <div className='row'>
                                        <div className='col-6'>
                                            <img src={item.image} alt="movie" style={{width:'630px', height:'500px'}}/>
                                        </div>
                                        <div className='col-6'>
                                        <div class="container text-center box">
                                        <div class="row align-items-end">
                                          <div class="col">
                                            <p style={{color:'grey'}}>Title</p>
                                            <h1>{item.title}</h1>
                                                   </div>
                                                <div class="col ">
                                                    <p style={{color:'grey', marginBottom:'35px'}}>Release Data</p>
                                                     <h5 style={{ marginBottom:'16px'}}> 22/01/23 </h5>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    <div className='row text-center box2'>
                                                        <p style={{color:'grey'}}>Duration</p>
                                                        <h4 style={{color:'yellow'}}>2hrs 15min 30sec</h4>
                                                    </div>
                                                    <div className='row main'>
                                                        <h5>Genre: </h5><h6>{item.genre}</h6>
                                                    </div>
                                                    <div className='row main'>
                                                        <h5>Actors:</h5><h6>{item.stars}</h6>
                                                        <div className='row'>
                                                            <h4>⭐⭐⭐⭐</h4>
                                                        </div>
                                                
                                                    </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <Link to={`/Booking/${item.title}`} className='btn btn-danger'>Book</Link>
                                    </div>
                              </div>
                            )
                        })
                    }
                
            }

render(){
    return(
        <>
    {this.renderFilter()}
        </>
    )
}
}
export default Details