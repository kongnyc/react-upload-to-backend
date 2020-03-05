import React, { useState } from 'react'
import { useInput } from './utility/login/customHook'


const Login= ()=> {
    // state={
    //     userName: "",
    //     password:""
    // // }
    // const [userName, setUser] = useState("")
    // const [password, setPassword] = useState("")
    
    const userNameObj = useInput("");
    const passwordObj = useInput("");

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    // handleChange=(e)=>{
    //     this.setState({[e.target.name]:e.target.value})
    // }

    // handleChange=(e)=>{
    //     e.preventDefault()
    //     this.setState({userName:e.target.value})
    // }

    // render() {

        console.log(userNameObj,passwordObj)
        // const {userName,password}=this.state
        return (
            <form onSubmit={handleSubmit}>
            <input name="userName" {...userNameObj}/>
            <input name="password" {...passwordObj}/>
            <button>Submit</button>
            </form>
        )
    // }
}
// export class Login extends Component {
//     state={
//         userName: "",
//         password:""
//     }
//     handleChange=(e)=>{
//         this.setState({[e.target.name]:e.target.value})
//     }

//     handleChange=(e)=>{
//         e.preventDefault()
//         this.setState({userName:e.target.value})
//     }

//     render() {
//         console.log(this.state)
//         const {userName,password}=this.state
//         return (
//             <form onSubmit={this.handleSubmit}>
//             <input name={"userName"} value={userName} onChange={this.handleChange}/>
//             <input name={"password"} value={password} onChange={this.handleChange}/>
//             </form>
//         )
//     }
// }

export default Login
