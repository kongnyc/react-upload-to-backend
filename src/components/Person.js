import React, { Component } from 'react'
import {useParams} from "react-router-dom"

const Person =()=>{
    // const param = useParams();
    const {id} = useParams();
    
    // debugger
    return (
        <div>
            {/* <h1>Person Name</h1> */}
            <h1>{id}</h1>
        </div>
    )

}

export default Person
