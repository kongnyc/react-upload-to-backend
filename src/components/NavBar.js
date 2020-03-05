import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "../css/NavBar.css"

export class NavBar extends Component {


    render() {
        return (
            <nav>
                <NavLink to={"./login"}>Login</NavLink>
                <NavLink exact to={"./"}>Home</NavLink>
                {/* <br></br> */}
                <NavLink to={"./product"}>Product</NavLink>
                <NavLink to={"./clock"}>Clock</NavLink>
                <NavLink to={"./movie"}>Movie</NavLink>
                {/* <br></br> */}
                <NavLink to={"/dogs"}>Dogs</NavLink>
                <NavLink to={"./form"}>Form</NavLink>
                <NavLink to={"./uploadImg"}>Upload Img</NavLink>
            </nav>
        )
    }
}

export default NavBar
