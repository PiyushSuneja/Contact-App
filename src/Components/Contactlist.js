import React from "react";
import Contactcard from "./Contactcard";

export default function Contactlist(props){

    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    }
    const rendercontactlist= props.contacts.map((contact)=>{

        return(
            <Contactcard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></Contactcard>
        )

    })
    return(
        <>
        <div className="ui celled list">
            <h2>Contact list</h2>
                           {rendercontactlist}
        </div>
        </>
    )
}