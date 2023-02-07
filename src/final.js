import React,{Component} from 'react'
import QRCode from "react-qr-code";
import axios from 'axios';
import JSON from './frontpage/db.json'

class Final extends Component{
constructor(props){
    super(props)
    this.state={
        code:JSON,
        params:props.match.params.topic,
        value:this.props.location.state,
        totalP:''
    }
}

total=()=>{
    return this.state.value.seat.seat*this.state.value.nticket.num
    // const seatPrice=this.state.value.seat.seat;
    // const numberofTickets = this.state.value.nticket.num
    // const totalPrice= seatPrice*numberofTickets
    
}


renderView=()=>{
    const newData = this.state.code.filter((data)=>{
       return data.title==this.state.params
       
    })
    if(newData){
        return newData.map((item)=>{
           
            
            return(
                <div key={item.id} style={{border:'1px solid', marginTop:'10%'}}>
                <div className='row' style={{marginTop:'80px'}}>
                <div className='col-md-6' >
                 <img src={item.image} alt={item.title} style={{width:'70%', height:'90%'}}/>
                 </div>
                 <div className='col-md-6'>
                 <h3><em>{item.title}</em></h3>
                 <h5>Date:<span style={{color:'red', paddingLeft:'5px'}}>{this.props.location.state.date.date}</span></h5>
                 <h5>Time : <span style={{color:'red', paddingLeft:'5px'}}>{this.state.value.time.time}</span></h5>
                 <h5>Number of Tickets :<span style={{color:'red', paddingLeft:'5px'}}> {this.state.value.nticket.num}</span></h5>
                 </div>

                </div>
                <div  className="total" style={{textAlign:'center'}}>
                    <h2 style={{marginTop:'20%'}}>Total: <span style={{color:'red', paddingLeft:'5px'}}>{this.total()}</span></h2>
                    
                </div>
                
                
                </div>
            )
        })
    }
}

render(){
    return(
        <>
        <div className='row'>
            <div className='col-md-6'>
        <div style={{ height: "auto", margin: "50px", maxWidth: 400, width: "100%", background: 'white', padding: '50px' }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={this.state.value}
    viewBox={`0 0 256 256`}  />
    </div>
</div>
<div className='col-md-6'>

{this.renderView()}


</div>
</div>
        </>
    )
}
}
export default Final