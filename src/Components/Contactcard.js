import React from "react";

export default function Contactcard(props){
    return(
        <div className="item">
             <div className="content">
                 <div className="header">{props.contact.name}</div>
                 <div className="">{props.contact.email}</div>
                 <i style={{color:"red"}} className="trash alternate outline icon"
                  onClick={()=>props.clickHandler(props.contact.id)}
                 ></i>
             </div>
            </div>
    )
}