import React from 'react';
import {BrowserRouter, Route,} from 'react-router-dom';
import Header from './header/header';
import Footer from './header/footer';
import Home from './frontpage/home';
import Latest from './latest/latest';
import Details from './details/details'
import Booking from './booking';
import Final from './final';
import Events from './events/events'
const App =()=>{
    return(
       
         
        <BrowserRouter>
        <Header/>
        <Route exact path='/' component={Home}/>
        <Route path='/movies' component={Latest}/>
        <Route path='/details/:topic' component={Details}/>
        <Route path='/booking/:topic' component={Booking}/>
        <Route path='/TicketBooked/:topic' component={Final}/>
        <Route path='/Events' component={Events}/>
        <Footer/>
        </BrowserRouter>
     
    )
}
export default App;