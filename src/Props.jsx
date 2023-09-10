import React from 'react'
import './index.css'

const tra = {
    marginBottom:'100px'
   
}
function Props(props){

    return(<>
    
      <div style={tra} id = "cards" class="col">
              <div class="card-body">
              <div class="card" style={{width: '18rem'}}>
            <img src={props.img} class="card-img-top" height="280px" width="217px" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{props.h5}</h5>
              
              <p class="card-text">{props.p}
              </p>
              <a href={props.watch} class="btn btn-primary">WATCH</a>
            </div>
              </div>
                
              </div>
      </div>
      
     </>);
  }

  export default Props;