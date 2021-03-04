import React from 'react'
export default function component (props){
    function handelClick(e){
        alert (`The user name is ${props.Name}`) ;
    }
    return (
        <div>
            <nav id="nav" className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">React props </a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
<br/>
<br/>
{/* inline stule */}
<div style={{backgroundColor: "#0b0b0" , width :"100%",textAlign:"center" , display:"block" , marginLeft:"auto" ,marginRight:"auto" , border: "5px solid black" ,borderRadius:"50px" }}> 
{/* inline stule */}
            <span> Full name : {props.Name} </span> 
            <br/>
            <span> {props.age} </span> 
            <br/>
            <span> profession : {props.profession} </span>
</div>      
<br/>
  <br/>
  <br/>
        <div className="name-1">
        <img className="img-top" src="ImageP.png" />
        
        </div>
        <br/>
  <br/>
  <br/>
        <div>
        <button id="btn" onClick={handelClick} type="button" className="btn btn-danger">Alert</button>
        </div>
        <br/>
  <br/>
  <br/>
        </div>
    )
}
