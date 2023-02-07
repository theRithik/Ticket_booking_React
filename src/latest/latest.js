import React,{Component} from 'react';
import JSON from '../frontpage/db.json'
import {Link} from 'react-router-dom'
class Latest extends Component{
    constructor(){
      super()
      this.state={
        latest:JSON
      }
    }
    renderView=()=>{
        if(this.state.latest){
          return  this.state.latest.map((item)=>{
                return(
                    <div key={item.id} className="col-md-4" style={{display:'inline-block'}}>
                    <div class="card" style={{width: '18rem', background:'transparent', border:'1px solid red'}}>
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

render(){
    return(
        <>
        <h2 style={{textAlign:'center',padding:'20px' }}>Latest Movies</h2>
        <div>{this.renderView()}</div>
        
        </>
    )
}
}
export default Latest;