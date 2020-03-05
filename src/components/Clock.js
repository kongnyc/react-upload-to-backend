// import React from 'react';
import React, { useState, useEffect } from 'react'


const Clock =()=> {
    
    // constructor(props) {
    //     super(props)
    //     this.state = {time: new Date().toLocaleString()}
    // }

    const [time,setTime]=useState(new Date().toLocaleString())

    useEffect(()=>{
        const getTime = setInterval(()=>{
                // console.log(time)
                setTime(new Date().toLocaleString())
            },1000)
            return ()=>clearInterval(getTime)
        } ,[]
    )

    // componentDidMount() {
    //     this.timer = setInterval(() => {
    //         // console.log(new Date().toLocaleString())
    //         this.setState({time: new Date().toLocaleString()})
    //     }, 1000)
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timer);
    // }
    // render() 
    // {
        return(
            <div>
                {time}
            </div>
        )
    }
// }

export default Clock;
// import React from 'react';

// class Clock extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {time: new Date().toLocaleString()}
//     }

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             // console.log(new Date().toLocaleString())
//             this.setState({time: new Date().toLocaleString()})
//         }, 1000)
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer);
//     }
//     render() {
//         return(
//             <div>
//                 {this.state.time}
//             </div>
//         )
//     }
// }

// export default Clock;