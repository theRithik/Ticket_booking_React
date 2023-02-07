import React,{Component} from 'react';
import './home.css'
import JSON from './db.json'
import Section from './secction2'
import {Link} from 'react-router-dom'

class Home extends Component{
  constructor(){
    super()
    this.state={
      movies:JSON,
      list:[]
    }
  }

  render(){
  
    return(
        <>
        <div className='row'>
        <div className='latest col-3 '>
          <Link to='/movies' style={{textDecoration:'none', color:'white'}}  ><h3 className="text"style={{textAlign:'center', marginTop:'50px'}}>Latest Movies</h3><h4 className='text2'>These movies will entertain you more</h4></Link>
        </div>
        <div className='secound col-3'>
        <Link to='/movies'  style={{textDecoration:'none', color:'white'}} >   <h3 className="text" style={{textAlign:'center', marginTop:'50px'}}>Upcoming Movies</h3><h4 className='text2'>These movies will entertain you more</h4></Link>
        </div>
        <div className='third col-3'>
        <Link to='/Events?page=1' style={{textDecoration:'none', color:'white'}}  >   <h3 className="text" style={{textAlign:'center', marginTop:'50px'}}>Events</h3><h4 className='text2'>These movies will entertain you more</h4></Link>
        </div>
        </div><br/>

        {/* coursel */}
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4909/474909-h" class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.puterea.ro/wp-content/uploads/2022/12/HO00002444.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://hips.hearstapps.com/sev.h-cdn.co/assets/16/12/1458835169-4071343-2895889394-the-a.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{/* Recommeneded Movies */}
<h3 style={{textAlign:'center', paddingTop:'20px', paddingBottom:'20px'}}>Recommended Movies</h3>
  <Section movieData={this.state.movies}/>
  
        </>
    )
  }
}
export default Home;